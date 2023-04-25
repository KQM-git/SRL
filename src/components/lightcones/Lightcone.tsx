import React, { ReactElement } from 'react'

import TabItem from '@theme/TabItem'
import Tabs from '@theme/Tabs'

import { Lightcone } from '@site/src/data/types'
import LightconeStats from './LightconeStats'
import LightconeStatsTable from './LightconeStatsTable'

export default function LightconeTab({ lightcone, lightcones, children }: { lightcone: string, lightcones: Record<string, Lightcone>, children?: ReactElement | null }) {
  return <Tabs>
    <TabItem value="desc" label="Description">
      <LightconeStats lightcone={lightcone} lightcones={lightcones} />
      {children && <><b>Notes:</b><br/>{children}</>}
    </TabItem>
    <TabItem value="stats" label="Stats Table">
      <LightconeStatsTable lightcone={lightcone} lightcones={lightcones} />
    </TabItem>
  </Tabs>
}