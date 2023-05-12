---
sidebar_position: 5001
---

# Enemy Data

Enemies are organized per type.

## Categories

import DocCardList from '@theme/DocCardList';

<DocCardList />

## All Enemies

import {useCurrentSidebarCategory} from '@docusaurus/theme-common';

<DocCardList items={
    useCurrentSidebarCategory().items
        .flatMap(i => i.type == "category" ? i.items : [])
        .sort((a, b) => a.label.localeCompare(b.label))
        .flatMap(i => [i, ...(i.type == "category" ? i.items : [])])
}/> 
