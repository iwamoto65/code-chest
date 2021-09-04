import React from "react";
import styled from 'styled-components'
import { AppBar, Toolbar, Typography } from "@material-ui/core";

const ContentHeader = styled(AppBar)`
  background-color: #f7f7f7;
`

const AppName = styled(Typography)`
  color: #222222;
  font-weight: 600;
`

export const Header: React.FC = () => {
  return (
    <>
      <ContentHeader>
        <Toolbar>
          <AppName variant="h6">
            CodeChest
          </AppName>
        </Toolbar>
      </ContentHeader>
    </>
  )
}
