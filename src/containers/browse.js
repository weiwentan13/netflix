import React, {useState, useContext, useEffect} from 'react';
import {SelectProfileContainer} from './profiles';
import Fuse from 'fuse.js';
import {FirebaseContext} from '../context/firebase';
import {Header, Loading, Card, Player} from '../components';
import * as ROUTES from '../constants/routes';
import logo from '../logo.svg';
import {FooterContainer} from './footer';

export function BrowseContainer({slides}){
    const [searchItem, setSearchItem] = useState('');
	const [profile, setProfile] = useState({});
	const [loading, setLoading] = useState(true);
	const {firebase} =useContext(FirebaseContext);
    const [category, setCategory] = useState('series');
    const [slideRows, setSlideRows] = useState([]);
	const user = firebase.auth().currentUser || {};
	
	useEffect(()=>{
		setTimeout(()=>{
			setLoading(false);
		}, 3000);
	}, [profile.displayName]);

    useEffect(()=>{
        setSlideRows(slides[category]);
    }, [slides, category]);

    useEffect(() => {
        const fuse = new Fuse(slideRows, {keys: ['data.description', 'data.genre', 'data.title'],});
        const results = fuse.search(searchItem).map(({item})=>item);

        if(slideRows.length > 0 && searchItem.length > 3 && results.length > 0){
            setSlideRows(results);
        } else {
            setSlideRows(slides[category]);
        }
    }, [searchItem]);
	
	return profile.displayName ? (
		<>
			{loading ? <Loading src={user.photoURL} /> : <Loading.ReleaseBody />}
			<Header src="joker1" dontShowOnSmallViewPort>
                <Header.Frame>
                    <Header.Group>
                        <Header.Logo to={ROUTES.HOME} src={logo} alt="Netflix" />
                        <Header.TextLink active={category==='series'?'true':'false'} onClick={()=>setCategory('series')}>Series</Header.TextLink>
                        <Header.TextLink active={category==='film'?'true':'false'} onClick={()=>setCategory('film')}>Films</Header.TextLink>
                    </Header.Group>
                    <Header.Group>
                        <Header.Search searchItem={searchItem} setSearchItem={setSearchItem} />
                        <Header.Profile>
                            <Header.Picture src={user.photoURL}/>
                            <Header.Dropdown>
                                <Header.Group>
                                    <Header.Picture src={user.photoURL}/>
                                    <Header.TextLink>{user.displayName}</Header.TextLink>
                                </Header.Group>
                                <Header.Group>
                                    <Header.TextLink onClick={()=>firebase.auth().signOut()}>Sign out</Header.TextLink>
                                </Header.Group>
                            </Header.Dropdown>
                        </Header.Profile>
                    </Header.Group>
				</Header.Frame>
				<Header.Feature>
                    <Header.FeatureCallOut>Watch Joker Now</Header.FeatureCallOut>
                    <Header.Text>testing</Header.Text>
                    <Header.PlayButton>Play</Header.PlayButton>
                </Header.Feature>
			</Header>

            <Card.Group>
                {slideRows.map((slideItem) => (
                    <Card key={`${category}-${slideItem.title.toLowerCase()}`}>
                        <Card.Title>{slideItem.title}</Card.Title>
                        <Card.Entities>
                            {slideItem.data.map((item) => (
                                <Card.Item key={item.docId} item={item}>
                                    <Card.Image src={`/image/${category}/${item.genre}/${item.slug}/small.jpg`} />
                                    <Card.Meta>
                                        <Card.SubTitle>{item.title}</Card.SubTitle>
                                        <Card.Text>{item.description}</Card.Text>
                                    </Card.Meta>
                                </Card.Item>
                            ))}
                        </Card.Entities>
                        <Card.Feature category={category}>
                            <Player>
                                <Player.Button />
                                <Player.Video src="/video/bunny.mp4" />
                            </Player>
                        </Card.Feature>
                    </Card>
                ))}
            </Card.Group>
		    <FooterContainer />
		</>
	) 
	: 
    (
	    <SelectProfileContainer user={user} setProfile={setProfile}/>
    );
}