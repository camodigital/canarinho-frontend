import * as S from './styles'

export type ContainerMasterProps = {
  children: React.ReactNode
  size?: 'xs' | 'small' | 'full' | 'default'
}

const ContainerMaster = ({
  children,
  size = 'default'
}: ContainerMasterProps) => (
  <S.Wrapper className="containerMaster" size={size}>
    {children}
  </S.Wrapper>
)

export default ContainerMaster
