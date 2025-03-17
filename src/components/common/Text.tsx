/*


TODO: Replace occurrences with design system, possibly use mapping over so we can call design system in
a similar way? e.g.
Text.Heading1
?
*/

import styled from "styled-components";
import { Link } from "react-router";
import { M } from "src/components/common/constants";

const BasicHeading = styled.div`
  font-family: ${M.FONT};
  font-weight: bold;
  font-style: normal;
  margin: 0px;
`;
export const Heading1 = styled(BasicHeading)`
  font-size: 68px;
  line-height: 80px;
`;
export const Heading2 = styled(BasicHeading)`
  font-size: 42px;
  line-height: 50px;
`;
export const Heading3 = styled(BasicHeading)`
  font-size: 34px;
  line-height: 44px;
`;
const Heading4 = styled(BasicHeading)`
  font-size: 26px;
  line-height: 38px;
`;
const Heading5 = styled(BasicHeading)`
  font-size: 18px;
  line-height: 26px;
`;

const BasicBodyText = styled.div`
  font-family: ${M.FONT};
  font-style: normal;
  margin: 0px;
`;
const Body1 = styled(BasicBodyText)`
  font-size: 26px;
  line-height: 38px;
  font-weight: 300;
`;
const Body2 = styled(BasicBodyText)`
  font-size: 20px;
  line-height: 30px;
  font-weight: 300;
`;
const Body3 = styled(BasicBodyText)`
  font-size: 16px;
  line-height: 24px;
  font-weight: 300;
`;
const Body4 = styled(BasicBodyText)`
  font-size: 14px;
  line-height: 20px;
  font-weight: normal;
`;
const Body5 = styled(BasicBodyText)`
  font-size: 12px;
  line-height: 18px;
  font-weight: normal;
`;

const BasicBranded = styled.div`
  font-family: ${M.TITLEFONT};
  font-style: normal;
  margin: 0px;
`;
const Branded1 = styled(BasicBranded)`
  font-size: 42px;
  line-height: 50px;
  font-weight: bold;
`;
const Branded2 = styled(BasicBranded)`
  font-size: 26px;
  line-height: 38px;
  font-weight: 300;
`;
const Branded3 = styled(BasicBranded)`
  font-size: 18px;
  line-height: 26px;
  font-weight: bold;
`;
const Branded4 = styled(BasicBranded)`
  font-size: 14px;
  line-height: 20px;
  font-weight: bold;
`;

const Branded5 = styled(BasicBranded)`
  font-size: 32px;
  line-height: 39px;
  font-weight: bold;
`;

const BasicOther = styled.div`
  font-family: ${M.FONT};
  font-style: normal;
  margin: 0px;
`;
const Other1 = styled(BasicOther)`
  font-size: 16px;
  line-height: 24px;
  font-weight: 500;
`;
const Other2 = styled(BasicOther)`
  font-size: 14px;
  line-height: 20px;
  font-weight: bold;
`;
const Other3 = styled(BasicOther)`
  font-size: 14px;
  line-height: 20px;
  font-weight: 300;
`;
const Other4 = styled(BasicOther)`
  font-size: 12px;
  line-height: 18px;
  font-weight: 500;
`;
const Other5 = styled(BasicOther)`
  font-size: 12px;
  line-height: 18px;
  font-weight: bold;
  letter-spacing: 0.05em;
  text-transform: uppercase;
`;
const Other6 = styled(BasicOther)`
  font-size: 10px;
  line-height: 16px;
  font-weight: normal;
`;

const LinkX = styled(Link)`
  text-decoration: none;
  color: inherit;
`;

const LinkA = styled.a`
  text-decoration: none;
  color: inherit;
`;

const TabableClick = styled.button`
  text-decoration: none;
  color: inherit;
  cursor: pointer;
  font: inherit;
  display: inline-block;
  border: none;
  margin: 0;
  padding: 0;
  background: none;
  text-align: inherit;
  -webkit-appearance: none;
  -moz-appearance: none;
  outline: none;
  &:active {
    outline: none;
  }
  &:focus {
    outline: solid black 2px;
  }
`;

const LinkABold = styled.a`
  text-decoration: none;
  color: inherit;
  font-weight: bold;
`;

const LinkUnderline = styled(Link)`
  text-decoration: underline;
  color: inherit;
`;

const LinkBold = styled(Link)`
  text-decoration: none;
  color: inherit;
  font-weight: bold;
`;

const ExternalLink = styled.a`
  text-decoration: none;
  color: inherit;
  font-weight: bold;
`;
const ExternalLinkUnderline = styled.a`
  text-decoration: underline;
  color: inherit;
`;

const JuanaBasicHeading = styled.div`
  font-family: ${M.JUANA_FONT};
  font-weight: 100;
  font-style: normal;
`;

const JuanaHeading1 = styled(JuanaBasicHeading)`
  font-size: 68px;
  line-height: 80px;
`;

export const JuanaHeading2 = styled(JuanaBasicHeading)`
  font-size: 46px;
  line-height: 60px;
`;

export const JuanaHeading3 = styled(JuanaBasicHeading)`
  font-size: 34px;
  line-height: 44px;
`;

const JuanaHeading4 = styled(JuanaBasicHeading)`
  font-size: 26px;
  line-height: 38px;
`;

const JuanaHeading5 = styled(JuanaBasicHeading)`
  font-size: 18px;
  line-height: 26px;
`;

export const TEXTSTYLE = {
  HEADING1: Heading1,
  HEADING2: Heading2,
  HEADING3: Heading3,
  HEADING4: Heading4,
  HEADING5: Heading5,
  BODY1: Body1,
  BODY2: Body2,
  BODY3: Body3,
  BODY4: Body4,
  BODY5: Body5,
  OTHER1: Other1,
  OTHER2: Other2,
  OTHER3: Other3,
  OTHER4: Other4,
  OTHER5: Other5,
  OTHER6: Other6,
  BRANDED1: Branded1,
  BRANDED2: Branded2,
  BRANDED3: Branded3,
  BRANDED4: Branded4,
  BRANDED5: Branded5,
  LINK: LinkX,
  LINKA: LinkA,
  LINKABOLD: LinkABold,
  LINKUNDERLINE: LinkUnderline,
  LINKBOLD: LinkBold,
  EXTERNALLINK: ExternalLink,
  EXTERNALLINKUNDERLINE: ExternalLinkUnderline,
  TABABLECLICK: TabableClick,
  JUANA: {
    HEADING1: JuanaHeading1,
    HEADING2: JuanaHeading2,
    HEADING3: JuanaHeading3,
    HEADING4: JuanaHeading4,
    HEADING5: JuanaHeading5,
  },
};
