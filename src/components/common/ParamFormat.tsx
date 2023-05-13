import { fixed } from '@site/src/utils/stats/common'
import React from 'react'

type Node = TextNode | ElementNode
interface TextNode { type: "text", value: string }
interface ElementNode { type: "element", tag: string, value?: string, children: Node[] }

export default function ParamFormat({ desc, params }: {
  desc: string
  params: number[]
}) {
  return <ParamFormatList desc={desc} params={[params]} />
}

export function ParamFormatList({ desc, params }: {
  desc: string
  params: number[][]
}) {
  const replaced = desc.replace(/#(\d+)\[(i|f\d)\](%?)/ig,
    (_, a, dec, formatting) => {
      const percentage = formatting == "%"
      const decimals = dec == "i" ? 0 : +dec.replace("f", "")
      let values = params.map(v => v[a - 1])

      if (values.every(v => v == values[0]))
        values = [values[0]]

      return values.map(value => {
        const formatted = fixed((value * (percentage ? 100 : 1)), decimals) + (percentage ? "%" : "")

        return `<value=${value}>${formatted}</value>`
      }).join("/")
    }
  ).replace(/\\n/g, "<br></br>")

  const parsed = parse(replaced)
  return <div><RenderList nodes={parsed} /></div>
}

function RenderList({ nodes }: { nodes: Node[] }) {
  return <>{nodes.map((n, i) => <Render node={n} key={i} />)}</>
}

function Render({ node }: { node: Node }) {
  switch (node.type) {
    case "element": {
      // All tags in use in English textmap for 1.0
      if (node.tag == "unbreak") // no line breaks here
        return <span><RenderList nodes={node.children} /></span>
      else if (node.tag == "u")
        return <u><RenderList nodes={node.children} /></u>
      else if (node.tag == "b")
        return <b><RenderList nodes={node.children} /></b>
      else if (node.tag == "i")
        return <i><RenderList nodes={node.children} /></i>
      else if (node.tag == "s")
        return <s><RenderList nodes={node.children} /></s>
      else if (node.tag == "color")
        return <span style={{ color: node.value }}><RenderList nodes={node.children} /></span>
      else if (node.tag == "size")
        return <span style={{ fontSize: `${node.value}px` }}><RenderList nodes={node.children} /></span>
      else if (node.tag == "align")
        return <span style={{ textAlign: node.value as "left" | "right" | "center" }}><RenderList nodes={node.children} /></span>
      else if (node.tag == "value")
        return <span title={`Raw value: ${node.value}`} className='value'><RenderList nodes={node.children} /></span>
      else if (node.tag == "br")
        return <><br></br><RenderList nodes={node.children} /></>

      throw `Unsupported tag ${node.tag}`
      // return <b style={{ color: "red" }}>{node.tag} is unsupported</b>
    }
    case "text": return <>{node.value}</>
  }
}


type ParseNode = Node & { state?: any }
function parse(text: string): Node[] {
  const root: ParseNode[] = []
  const currentStack: ParseNode[] = []

  const getCurrent = () => currentStack[0]
  const cleanText = () => { while (getCurrent()?.type == "text") currentStack.shift() }
  const append = (node: ParseNode) => {
    currentStack.unshift(node)
    if (currentStack.length == 1)
      root.push(getCurrent())
    else if (currentStack[1].type == "element")
      currentStack[1].children.push(getCurrent())
  }

  for (let i = 0; i < text.length; i++) {
    const c = text[i], nc = text[i + 1]
    if (c == "<") {
      if (nc !== "/") {
        // Creation of <BLAH
        cleanText()
        append({
          type: "element",
          tag: "",
          value: undefined,
          children: [],
          state: "TAG"
        })
      } else {
        // Closing of </BLAH
        cleanText()
        getCurrent().state = "CLOSING"
      }
    } else if (c == ">" && getCurrent().state == "CLOSING") {
      // </BLAH>|
      delete getCurrent().state
      currentStack.shift()
    } else if (c == ">" && (getCurrent().state == "TAG" || getCurrent().state == "VALUE")) {
      // <BLAH>|
      getCurrent().state = "INTERNAL"
    } else {
      // Create text node if needed for <tag>BLAH or start with BLAH
      if (currentStack.length == 0 || getCurrent().state == "INTERNAL") {
        append({
          type: "text",
          value: ""
        })
      }

      // Handling of other chars
      const current = getCurrent()
      if (current.type == "text") {
        // Append to text
        current.value = current.value + c
      } else if (current.type == "element") {
        switch (current.state) {
          case "TAG": {
            if (c == "=") {
              current.state = "VALUE"
              break;
            }
            // Append to tag creation
            current.tag = current.tag + c
            break;
          }
          case "VALUE": {
            // Append to value parsing
            current.value = (current.value ?? "") + c
            break;
          }
        }
      }
    }
  }

  return root
}