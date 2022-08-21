import { SearchInput } from "../../components/Input";
import {
  Flex,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuItemOption,
  MenuGroup,
  MenuOptionGroup,
  MenuDivider,
  Image,
} from "@chakra-ui/react";
import { ChevronDownIcon, SettingsIcon } from '@chakra-ui/icons'
import { ytLogo } from "../../assets/img";
import { BtnLogin, BtnSearch, ConfigBtn, PhoneIcon, MainHeader } from "../../components";
import { useState } from 'react'
import { useDevice } from "../../hooks";

export const Header = () => {
  const { device: { isMobile }} = useDevice()

    return (
      <Flex alignItems="center" flexDir="column" w="100%">
        <Flex justifyContent="center" align="center" w="100%" p="10px">
          <Flex
            w='200px'
          >
            <a href="https://github.com/JxVtrl" target='_blank'>
              <Image
                h='100%'
                w='100%'
                src={ytLogo}
              />
            </a>
          </Flex>
          <Flex w='100%' justify='center'>
            <SearchInput width="30%" placeholder="Pesquisar" />
            <PhoneIcon />
            <BtnSearch />
          </Flex>
          <Flex align='center'>
            <Menu>
              <MenuButton>
                <SettingsIcon/>
              </MenuButton>
              <MenuList>
                <MenuItem>Download</MenuItem>
                <MenuItem>Create a Copy</MenuItem>
                <MenuItem>Mark as Draft</MenuItem>
                <MenuItem>Delete</MenuItem>
                <MenuItem>To become Premium</MenuItem>
              </MenuList>
            </Menu>
            <BtnLogin text="fazer login" />
          </Flex>
        </Flex>
        {isMobile || <MainHeader />}
      </Flex>
    );
}