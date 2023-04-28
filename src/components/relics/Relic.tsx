import React, { ReactElement } from 'react'

import TabItem from '@theme/TabItem'
import Tabs from '@theme/Tabs'

import RelicSetBonus from './RelicSetBonus'

export default function Relic({ relic, children }: { relic: string, children?: ReactElement | null }) {
  if (!children) return <RelicSetBonus relic={relic} />
  return <Tabs>
    <TabItem value="desc" label="Description">
      <RelicSetBonus relic={relic} />
    </TabItem>

    <TabItem value="findings" label="Findings">
      {children}
    </TabItem>
  </Tabs>
}