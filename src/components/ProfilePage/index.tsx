import React from 'react';
import Feed from '../Feed'
import { 
    Container, 
    Banner,
    Avatar,
    ProfileData,
    LocationIcon,
    CakeIcon,
    Followage,
    EditButton
} from './styles';

const ProfilePage: React.FC = () => {
  return (
      <Container>
        <Banner>
            <Avatar/>
        </Banner>
        <ProfileData>
            <EditButton outlined>Editar perfil</EditButton>
            <h1>Lucas Henrique</h1>
            <h2>@lucas_hecs</h2> 
            <p>
                Full Stack Developer
                <a href=""> @react-js</a>
            </p>

            <ul>
                <li>
                    <LocationIcon/>
                    Natal, Brasil
                </li>
                <li>
                    <CakeIcon/>
                    Nascido(a) em 03 de junho de 1998
                </li>
            </ul>
        <Followage>
            <span>
                seguindo <strong>94</strong>
            </span>
            <span>
                <strong>122 </strong> seguidores
            </span>
        </Followage>       
        </ProfileData>
        <Feed/>
      </Container>

  );
}

export default ProfilePage;