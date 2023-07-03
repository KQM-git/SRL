import React, { useState, useEffect } from 'react'

import CharSelector from './CharSelector'
import Preview from './Preview'

import { findFuzzyBestCandidates } from '@site/src/utils/fuzzy'
import TabItem from '@theme/TabItem'
import Tabs from '@theme/Tabs'
import { CheckboxInput } from '../../common/input/CheckboxInput'
import filename from '@site/src/utils/filename'

export interface PortraitIcon {
  name: string
  path: string
  full?: boolean
  elementIcon?: {
    name: string
    path: string
  }
  others?: PortraitIcon[]
}

const elements = [{
  name: "Fire",
  path: "/img/elements/Fire.png",
}, {
  name: "Physical",
  path: "/img/elements/Physical.png",
}, {
  name: "Ice",
  path: "/img/elements/Ice.png",
}, {
  name: "Lightning",
  path: "/img/elements/Lightning.png",
}, {
  name: "Wind",
  path: "/img/elements/Wind.png",
}, {
  name: "Quantum",
  path: "/img/elements/Quantum.png",
}, {
  name: "Imaginary",
  path: "/img/elements/Imaginary.png"
}]

const path = [{
    name: "The Hunt",
    path: "/img/path/The Hunt.png",
  }, {
    name: "Destruction",
    path: "/img/path/Destruction.png",
}, {
    name: "Erudition",
    path: "/img/path/Erudition.png",
}, {
    name: "Harmony",
    path: "/img/path/Harmony.png",
}, {
    name: "Preservation",
    path: "/img/path/Preservation.png",
}, {
    name: "Abundance",
    path: "/img/path/Abundance.png",
}, {
    name: "Nihility",
    path: "/img/path/Nihility.png"
  }]

const localStorageKey = "portrait-generator-custom-icons"

export default function PortraitGenerator({
  charIcons, relicIcons, lightconeIcons
}: {
  charIcons: Record<string, string[]>,
  relicIcons: Record<string, string[]>,
  lightconeIcons: Record<string, string[]>
}) {
  const [active, setActive] = useState([{
    name: "March 7th",
    path: `/img/characters/icon/March_7th.png`
  }] as PortraitIcon[])
  const [custom, setCustom] = useState([] as PortraitIcon[])
  const [background, setBackground] = useState(true)
  const [portraitPadding, setPortraitPadding] = useState(true)
  const [names, setNames] = useState(true)
  const [search, setSearch] = useState("")

  // Loading of custom icons
  useEffect(() => {
    try {
      const parsed = JSON.parse(localStorage.getItem(localStorageKey))
      if (parsed)
        setCustom(parsed)
    } catch (error) {}
  }, [])

  // Saving of custom icons
  useEffect(() => {
    if (custom)
      localStorage.setItem(localStorageKey, JSON.stringify(custom))
  }, [custom])

  const iconsMisc = [
    {
      name: "Fill slot",
      path: "/img/characters/abstract-user-flat-3-colored.svg",
    },
  ]

  const iconsChar = Object.entries(charIcons).sort((a, b) => a[0].localeCompare(b[0])).map(([element, icons]) => ({
    element,
    chars: icons.sort().map(name => ({
      name,
      path: `/img/characters/icon/${filename(name)}.png`,
    }))
  }))

  const iconsRelics = Object.entries(relicIcons).sort((a, b) => a[0].localeCompare(b[0])).map(([level, icons]) => ({
    level,
    icons: icons.map(name => ({
      name,
      path: `/img/relics/icon/${filename(name)}.png`,
      full: true
    }))
  }))

  const iconsLightCones = Object.entries(lightconeIcons).sort((a, b) => a[0].localeCompare(b[0])).map(([type, icons]) => ({
    type,
    icons: icons.map(name => ({
      name,
      path: `/img/lightcones/icon/${filename(name)}.png`,
      // full: true
    }))

  }))

  const allIcons: PortraitIcon[] = [
    ...iconsChar.flatMap(x => [...x.chars]),
    ...elements,
    ...iconsRelics.flatMap(x => x.icons),
    ...iconsLightCones.flatMap(x => x.icons),
    ...path,
    ...iconsMisc,
    ...custom
  ]

  const matches = findFuzzyBestCandidates(allIcons.map(x => x.name), search, 8)
  const searchMatches = search.length == 0 ? [] : matches.flatMap(m => allIcons.filter(x => m == x.name)).filter((v, i, a) => a.indexOf(v) == i)

  function add(icon: PortraitIcon, multi: boolean) {
    if (multi) {
      if (!active[active.length - 1]) {
        setActive([icon])
        return
      }
      const last = Object.assign({}, active[active.length - 1])
      if (!last.others) last.others = []
      if (last.others.length < 3) {
        last.others.push(icon)
        setActive([...active.slice(0, active.length - 1), last])
        return
      }
    }
    if (active.length < 8)
      setActive([...active, icon])
  }
  function pop() {
    const last = active[active.length - 1]
    if (last.others) {
      last.others.pop()
      if (last.others.length == 0)
        delete last.others
    } else
      active.pop()
    setActive([...active])
  }

  return <div>
    <Preview
      active={active}
      remove={(i: number) => setActive([...active.slice(0, i), ...active.slice(i + 1)])}
      background={background}
      names={names}
      portraitPadding={portraitPadding}
    />

    <label>
      Quick input: <input type="text" value={search} onChange={e => setSearch(e.target.value)} onKeyDown={e => {
        if (e.key == "Enter" && searchMatches.length > 0) {
          add(searchMatches[0], e.shiftKey)
          setSearch("")
          return
        }
        console.log(e)
        if (e.key == "Backspace" && e.shiftKey && search.length == 0 && active.length > 0) {
          pop()
        }
      }} />
    </label> (Enter to add, Shift+Enter to add to multi, Shift+Backspace on empty search bar to pop last addition)
    <div>
      {searchMatches.length > 0 && <CharSelector
        icons={searchMatches}
        onClick={add}
      />}
    </div>

    <h2>Characters</h2>
    <Tabs>
      {iconsChar.map(({ element, chars }) => {
        return <TabItem key={element} value={element} label={element}>
          <CharSelector
            icons={chars}
            onClick={add}
          />
          
        </TabItem>
      })}
    </Tabs>

    <h2>Elements</h2>
    <CharSelector icons={elements} onClick={add} />

    <h2>Relics</h2>
    <Tabs>
      {iconsRelics.map(({ level, icons }) => {
        return <TabItem key={level} value={level} label={level}>
          <CharSelector
            icons={icons}
            onClick={add}
          />
        </TabItem>
      })}
    </Tabs>

    <h2>Light Cones</h2>
    <Tabs>
      {iconsLightCones.map(({ type, icons }) => {
        return <TabItem key={type} value={type} label={type}>
          <CharSelector
            icons={icons}
            onClick={add}
          />
        </TabItem>
      })}
    </Tabs>

    <h2>Combat Types</h2>
    <CharSelector icons={path} onClick={add} />

    <h2>Misc</h2>
    <CharSelector icons={iconsMisc} onClick={add} />

    {custom.length > 0 && <>
      <h2>Custom</h2>
      <CharSelector icons={custom} onClick={add} onCtrlClick={icon => {
        if (!confirm(`Are you sure you want to delete ${icon.name}`))
          return
        setCustom(custom.filter(x => x != icon))
      }} />
    </>}

    <h2>Settings</h2>
    <label>
      Use background: <CheckboxInput set={setBackground} value={background} />
    </label> <br/>
    <label>
      Portrait padding: <CheckboxInput set={setPortraitPadding} value={portraitPadding} />
    </label> <br/>
    <label>
      Add names text: <CheckboxInput set={setNames} value={names} />
    </label> <br/>
    <a href='#' onClick={e => {
      e.preventDefault()
      const name = prompt("Name", `Custom Icon`)
      const url = prompt("URL (make sure the link has proper CORS headers or it'll be blocked by the browser)")
      setCustom([...custom, {
        name,
        path: url,
      }])
    }}>Add custom image</a>
  </div>
}
