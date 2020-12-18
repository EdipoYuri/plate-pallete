import styled from 'styled-components'
import { Heart } from '@styled-icons/boxicons-solid/Heart'
import { HeartOutlined } from '@styled-icons/entypo/HeartOutlined'
import { BookmarkOutline } from '@styled-icons/evaicons-outline/BookmarkOutline'
import { Bookmark } from '@styled-icons/evaicons-solid/Bookmark'
import { Star } from '@styled-icons/boxicons-solid/Star'

export const FilledButton = styled.button`
  cursor: pointer;
  outline: none;
  min-width: 150px;
  height: ${props => props.height ? props.height : '50px'};
  border: none;
  border-radius: 0 5px 5px 0;
  background: ${props => props.color};
  color: white;
  font-weight: bold;
  box-shadow: ${props => props.shadow ? '0 2px 8px -2px gray' : 'none'};
`

export const GreenButton = styled.button`
  width: ${props => props.width};

  border: 2px solid var(--color-primary);
  border-radius: 5px;
  outline: 0;

  font-size: 18px;
  background-color: transparent;

  margin-top: 10px;
  margin-bottom: 10px;
  padding-top: 10px;
  padding-bottom: 10px;

  &:hover{
    background-color: var(--color-primary);
    color: white;

    cursor: pointer;

    &:active{
      background-color: var(--color-primary-darker);
    }
  }
`

export const CheckedHeart = styled(Heart)`
  color: red;
  width: 20px;
`

export const UncheckedHeart = styled(HeartOutlined)`
  width: 30px;
  color: grey;
  margin-left: 10px;
`

export const Bottom = styled.div`
  width: 220px;
  min-height: 50px;

  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const UncheckBookmark = styled(BookmarkOutline)`
  color: var(--color-secondary);
  width: 30px;
`

export const CheckBookmark = styled(Bookmark)`
  color: var(--color-secondary);
`

export const FilledStar = styled(Star)`
  width: 25px;
  color: rgba(0, 0, 0, 0.75);
`

export const UnfilledStar = styled(Star)`
  width: 25px;
  color: rgba(0, 0, 0, 0.2);
`