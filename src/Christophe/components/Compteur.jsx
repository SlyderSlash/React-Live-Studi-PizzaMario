/* eslint-disable react/jsx-no-duplicate-props */
import { useState } from 'react';
import { Badge, Image } from 'antd';
import avatar from '../assets/img/avatar.jpg';
import associe from '../assets/img/associe.jpg';
import { LikeOutlined, DislikeOutlined } from '@ant-design/icons';

const Compteur = () => {
  const [countAvatar, setCountAvatar] = useState(null);
  const [countAssocie, setCountAssocie] = useState(null);

  // incrémente compteur de like selon le film
  const handlePlus = (movie) => {
    switch (movie) {
      case 'avatar':
        setCountAvatar(countAvatar + 1);
        break;
      case 'associe':
        setCountAssocie(countAssocie + 1);
        break;
      default:
        break;
    }
  };

  // décrémente compteur de like selon le film

  const handleMinus = (movie) => {
    switch (movie) {
      case 'avatar':
        setCountAvatar(countAvatar - 1);
        break;
      case 'associe':
        setCountAssocie(countAssocie - 1);
        break;
      default:
        break;
    }
  };

  // badge vert si positif et rouge si négatif selon le compteur du film
  const handleBackground = (movieCount) => {
    return movieCount > 0 ? { backgroundColor: '#52c41a' } : { backgroundColor: '#c4421a' };
  };

  return (
    <div className="compteurBlock">
      <h1>Compteur de like</h1>
      <div className="imgagesBlock">
        {/* ------- -------- avatar ---------------- */}
        <div className="imgageAndButton">
          <Badge count={countAvatar} style={handleBackground(countAvatar)}>
            {/*  <Avatar shape="square" src={avatar} className="avatar" size={300}/> */}
            <Image
              width={280}
              height={400}
              src={avatar}
              preview={{
                src: avatar,
              }}
            />
          </Badge>
          <div className="buttonBlock">
            <LikeOutlined style={{ color: '#00ff2a' }} onClick={() => handlePlus('avatar')} className="btn btn-good" />
            <DislikeOutlined
              style={{ color: '#ff0000' }}
              onClick={() => handleMinus('avatar')}
              className="btn btn-bad"
            />
          </div>
        </div>
        {/* ------- -------- fin avatar ---------------- */}
        {/* ------- -------- associé du diable ---------------- */}
        <div className="imgageAndButton">
          <Badge count={countAssocie} style={handleBackground(countAssocie)}>
            {/*  <Avatar shape="square" src={avatar} className="avatar" size={300}/> */}
            <Image
              width={280}
              height={400}
              src={associe}
              preview={{
                src: associe,
              }}
            />
          </Badge>
          <div className="buttonBlock">
            <LikeOutlined style={{ color: '#00ff2a' }} onClick={() => handlePlus('associe')} className="btn btn-good" />
            <DislikeOutlined
              style={{ color: '#ff0000' }}
              onClick={() => handleMinus('associe')}
              className="btn btn-bad"
            />
          </div>
        </div>
        {/* ------- -------- fin associé du diable ---------------- */}
      </div>
    </div>
  );
};

export default Compteur;
