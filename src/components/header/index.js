import React, {useState} from 'react';
import {Link as ReactRouterLink} from 'react-router-dom';
import {Background, Container, PlayButton, Logo, Search, SearchIcon, SearchInput, ButtonLink, Feature, Profile, Picture, Dropdown, Text, Group, FeatureCallOut, Link} from './styles/header'

export default function Header({bg = true, children, ...restProps}){
    return bg? <Background {...restProps}>{children}</Background> : children;
}

Header.Frame = function HeaderFrame({ children, ...restProps }){
    return <Container {...restProps}>{children}</Container>
}

Header.Logo = function HeaderLogo({ to, ...restProps }){
    return (
        <ReactRouterLink to={to}>
            <Logo {...restProps} />
        </ReactRouterLink>
    );
}

Header.ButtonLink = function HeaderButtonLink({ children, ...restProps }){
    return <ButtonLink {...restProps}>{children}</ButtonLink>
}

Header.Feature = function HeaderFeature({ children, ...restProps }){
    return <Feature {...restProps}>{children}</Feature>
}

Header.Text = function HeaderText({ children, ...restProps }){
    return <Text {...restProps}>{children}</Text>
}

Header.FeatureCallOut = function HeaderFeatureCallOut({ children, ...restProps }){
    return <FeatureCallOut {...restProps}>{children}</FeatureCallOut>
}

Header.TextLink = function HeaderTextLink({ children, ...restProps }){
    return <Link {...restProps}>{children}</Link>
}

Header.Group = function HeaderGroup({ children, ...restProps }){
    return <Group {...restProps}>{children}</Group>
}

Header.Dropdown = function HeaderDropdown({ children, ...restProps }){
    return <Dropdown {...restProps}>{children}</Dropdown>
}

Header.Picture = function HeaderPicture({src, ...restProps }){
    return <Picture {...restProps} src={`/image/users/${src}.png`}/>
}

Header.Profile = function HeaderProfile({ children, ...restProps }){
    return <Profile {...restProps}>{children}</Profile>
}

Header.PlayButton = function HeaderPlayButton({ children, ...restProps }){
    return <PlayButton {...restProps}>{children}</PlayButton>
}

Header.Search = function HeaderSearch({ searchItem, setSearchItem, ...restProps }){
    const [searchActive, setSearchActive] = useState(false);
    return (
        <Search {...restProps}>
            <SearchIcon onClick={()=>setSearchActive(searchActive => !searchActive)}>
                <img src="/image/icons/search.png" alt="Search"/>
            </SearchIcon>
            <SearchInput 
                value={searchItem} 
                onChange={({target})=>setSearchItem(target.value)}
                placeholder="Search films and series"
                active={searchActive}
            />
        </Search>
    )
}