import React from 'react'

import Admonition from '@theme/Admonition'

import curios from '@site/src/data/curios.json'
import { Curio } from '@site/src/data/types'
import filename from '@site/src/utils/filename'

import ParamFormat from '../common/ParamFormat'

export default function CurioDesc({ curio }: { curio: string }) {
  const cur = curios[curio] as Curio

  if (!cur)
    return <Admonition type="danger">
      Missing curio data for {curio}
    </Admonition>

  return <div>
    <img className="icon-display-box" src={`/img/curios/icon/${filename(curio)}.png`} width={256} height={256} />
    <table>
      <thead>
        <tr>
          <th style={({ minWidth: "120px" })}>Attribute</th>
          <th style={({ minWidth: "120px" })}>Effect</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th style={({ minWidth: "120px" })}>Description</th>
          <td><ParamFormat desc={cur.desc} params={cur.params}/></td>
        </tr>
        {cur.fixedDesc !== undefined && <tr>
          <th style={({ minWidth: "120px" })}>Description (Fixed)</th>
          <td><ParamFormat desc={cur.fixedDesc} params={cur.fixedParams}/></td>
        </tr>}
      </tbody>
    </table>
    <div className="clear" />
  </div>
}