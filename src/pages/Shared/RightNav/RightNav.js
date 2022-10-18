import React from "react";
import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import ListGroup from "react-bootstrap/ListGroup";
import {
    FaGoogle,
    FaFacebook,
    FaTwitter,
    FaYoutube,
    FaWhatsapp,
    FaInstagram,
} from "react-icons/fa";
import BrandCarousel from "../BrandCarousel/BrandCarousel";

const RightNav = () => {
    return (
        <div>
            <ButtonGroup className="mb-5" vertical>
                <Button className="mb-2 rounded-2" variant="outline-primary">
                    <FaGoogle></FaGoogle> Sign In With Google
                </Button>
                <Button className="rounded-2" variant="outline-dark">
                    <FaFacebook></FaFacebook> Sign In with Facebook
                </Button>
            </ButtonGroup>
            <div>
                <h4>Find us on</h4>
                <ListGroup>
                    <ListGroup.Item className="mb-1 rounded-2">
                        <FaGoogle></FaGoogle>
                        Google
                    </ListGroup.Item>
                    <ListGroup.Item className="mb-1 rounded-2">
                        <FaFacebook></FaFacebook>
                        Facebook
                    </ListGroup.Item>
                    <ListGroup.Item className="mb-1 rounded-2">
                        <FaTwitter></FaTwitter>
                        Twitter
                    </ListGroup.Item>
                    <ListGroup.Item className="mb-1 rounded-2">
                        <FaInstagram></FaInstagram>
                        Instagram
                    </ListGroup.Item>
                    <ListGroup.Item className="mb-1 rounded-2">
                        <FaWhatsapp></FaWhatsapp>
                        Whatsapp
                    </ListGroup.Item>
                    <ListGroup.Item className="mb-1 rounded-2">
                        <FaYoutube></FaYoutube>
                        Youtube
                    </ListGroup.Item>
                </ListGroup>
            </div>
            <div>
                <BrandCarousel></BrandCarousel> 
            </div>
        </div>
    );
};

export default RightNav;
