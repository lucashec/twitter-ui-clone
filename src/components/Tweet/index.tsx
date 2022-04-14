import React from 'react';

import { 
    Container,
    Retweeted,
    RetweetedIcon,
    RetweetIcon,
    Body,
    Avatar,
    Content,
    Header,
    Dot,
    Description,
    ImageContent,
    Status,
    CommentIcon,
    LikeIcon,
    Icons
} from './styles';

const Tweet: React.FC = () => {
  return (
    <Container>
     <Retweeted>
      <RetweetedIcon/>
      Você retweetou
     </Retweeted>
     <Body>
      <Avatar/>
      <Content>
        <Header>
         <strong>Lucas Henrique</strong>
         <span>@lucas_hecs</span>
         <Dot/>
         <time>29 de março</time>
        </Header>
        <Description> Treinando react</Description>
        
        <ImageContent/>
        <Icons>
            <Status>
              <CommentIcon />
              18
            </Status>
            <Status>
              <RetweetIcon />
              18
            </Status>
            <Status>
              <LikeIcon />
              999
            </Status>
        </Icons>
      </Content>
     </Body>
    </Container>
  );
}

export default Tweet;