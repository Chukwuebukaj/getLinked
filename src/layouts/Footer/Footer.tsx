import { Link } from "react-router-dom";
import Logo from "../../components/Logo";
import {
  FooterWrapper,
  FooterBody,
  First,
  Second,
  Third,
  UsefulLinks,
  SocialMedia,
  SocialMediaIcons,
  ContactList,
} from "./Footer.styled";
import {
  contactUsData,
  getLinkedInfo,
  socialMediaIcons,
  usefulLinks,
} from "./FooterData";
import {
  GreyStarSmall,
  PinkStarSmall,
  WhiteStarSmall,
} from "../../components/TinyImages";

const Footer = () => {
  return (
    <FooterWrapper>
      <FooterBody>
        <First>
          <Logo />
          <p className="info">{getLinkedInfo}</p>

          <span className="tu-pp">
            <a href="">Terms of Use</a> <span className="divider"> | </span>
            <a href="">Privacy Policy</a>
          </span>
        </First>
        <Second>
          <span>Useful Links</span>
          <UsefulLinks>
            {usefulLinks.map((link, index) => (
              <li key={index}>
                {index < 3 ? (
                  <a href={link.path}>{link.title}</a>
                ) : (
                  <Link to={link.path}>{link.title}</Link>
                )}
              </li>
            ))}
          </UsefulLinks>
          <SocialMedia>
            <span className="follow">Follow us</span>
            <SocialMediaIcons>
              {socialMediaIcons.map((icon, index) => (
                <li key={index}>
                  <a
                    href={`https://${icon.url}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {icon.icon}
                  </a>
                </li>
              ))}
            </SocialMediaIcons>
          </SocialMedia>
        </Second>
        <Third>
          <span>Contact Us</span>
          <ContactList>
            {contactUsData.map((data, index) => (
              <li key={index}>
                {data.icon}
                <p>{data.content}</p>
              </li>
            ))}
          </ContactList>
        </Third>
      </FooterBody>
      <span className="last">All rights reserved. © getlinked Ltd.</span>
      <WhiteStarSmall className={"white1"} />
      <WhiteStarSmall className={"white2"} />
      <PinkStarSmall className={"pink"} />
      <GreyStarSmall className={"grey"} />
    </FooterWrapper>
  );
};

export default Footer;
