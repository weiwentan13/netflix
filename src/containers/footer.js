import React from 'react';
import {Footer} from '../components';

export function FooterContainer(){
    return (
        <Footer>
            <Footer.Title>Question</Footer.Title>
            <Footer.Break />
            <Footer.Row>
                <Footer.Column>
                    <Footer.Link href="#">FAQ</Footer.Link>
                    <Footer.Link href="#">Investor Relations</Footer.Link>
                    <Footer.Link href="#">Ways to Watch</Footer.Link>
                    <Footer.Link href="#">Coporate Information</Footer.Link>
                    <Footer.Link href="#">Netflix Originals</Footer.Link>
                </Footer.Column>

                <Footer.Column>
                    <Footer.Link href="#">Help Centre</Footer.Link>
                    <Footer.Link href="#">Investor Relations</Footer.Link>
                    <Footer.Link href="#">Ways to Watch</Footer.Link>
                    <Footer.Link href="#">Coporate Information</Footer.Link>
                    <Footer.Link href="#">Contact Us</Footer.Link>
                </Footer.Column>

                <Footer.Column>
                    <Footer.Link href="#">Account</Footer.Link>
                    <Footer.Link href="#">Investor Relations</Footer.Link>
                    <Footer.Link href="#">Ways to Watch</Footer.Link>
                    <Footer.Link href="#">Speed Test</Footer.Link>
                </Footer.Column>

                <Footer.Column>
                    <Footer.Link href="#">Media Centre</Footer.Link>
                    <Footer.Link href="#">Investor Relations</Footer.Link>
                    <Footer.Link href="#">Ways to Watch</Footer.Link>
                    <Footer.Link href="#">Legal Notices</Footer.Link>
                </Footer.Column>
            </Footer.Row>
            <Footer.Break />
            <Footer.Text>Netflix United Kingdom</Footer.Text>
        </Footer>
    )
}