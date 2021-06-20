import ButtonIcon from 'components/ButtonIcon'
import IconArrowSide from 'components/Icons/IconArrowSide'
import MediaMatch from 'components/MediaMatch'
import TextLimited from 'components/TextLimited'
import React, { useState } from 'react'

import * as S from './styles'

export type TabRightProps = {
  items: { title: string; text: string; slug: string }[]
}

const TabRight = ({ items }: TabRightProps) => {
  const [activeTab, setActiveTab] = useState(0)

  return (
    <S.Wrapper>
      <S.Tabs>
        {!!items &&
          items.map((item, index) => (
            <S.Tab
              className={activeTab === index ? 'activeTab' : ''}
              key={item.title + index}
              onClick={() => setActiveTab(index)}
            >
              <S.TabIcon>
                <IconArrowSide />
              </S.TabIcon>

              {item.title}

              <S.TabButton>
                <ButtonIcon
                  tone="tertiary"
                  size="small"
                  manner="internal"
                  link={`/funcionamento/${item.slug}`}
                  icon="arrowRight"
                />
              </S.TabButton>
            </S.Tab>
          ))}
      </S.Tabs>

      <MediaMatch method="greaterThan" medias="tablet">
        <S.Contents>
          {!!items &&
            items.map((item, index) => (
              <S.Content
                className={activeTab === index ? 'activeTab' : ''}
                key={item.text + index}
              >
                <TextLimited text={item.text} limit={400} />
                <S.ContentButton>
                  <ButtonIcon
                    tone="tertiary"
                    size="small"
                    manner="internal"
                    link={`/funcionamento/${item.slug}`}
                    icon="arrowRight"
                  />
                </S.ContentButton>
              </S.Content>
            ))}
        </S.Contents>
      </MediaMatch>
    </S.Wrapper>
  )
}

export default TabRight
