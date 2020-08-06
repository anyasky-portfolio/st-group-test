import styled from '@emotion/styled'

export const TimeSelectionSelect = styled.div`
  margin: 10px 0 0;

  .tabs {
    display: flex;
    margin: 0;
    .tab {
      margin: 0;
      border: 1px solid #555555;
      padding: 4px 8px;
      cursor: pointer;
      &:hover {
        background: #EEEEEE;
      }
      &:first-of-type {
        border-top-left-radius: 3px;
        border-bottom-left-radius: 3px;
      }
      &:last-of-type {
        border-top-right-radius: 3px;
        border-bottom-right-radius: 3px;
      }
      &.selected {
        background: #CCCCCC;
      }
    }
    .tab + .tab {
      border-left: none;
    }
  }
`