import React, { ReactElement } from 'react'

import TabItem from '@theme/TabItem'
import Tabs from '@theme/Tabs'

import CurioDesc from './CurioDesc'

export default function Curio({ curio, children }: { curio: string, children?: ReactElement | null }) {
  if (!children) return <CurioDesc curio={curio} />
  return <Tabs>
    <TabItem value="desc" label="Description">
      <CurioDesc curio={curio} />
    </TabItem>

    <TabItem value="findings" label="Findings">
      {children}
    </TabItem>
  </Tabs>
}