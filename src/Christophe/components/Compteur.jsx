import { useState } from 'react';
import { Badge, Image } from 'antd';
import avatar from '../assets/img/avatar.jpg';
import { LikeOutlined, DislikeOutlined } from '@ant-design/icons';

const Compteur = () => {
  const [countAvatar, setCountAvatar] = useState(null);

  const [visible, setVisible] = useState(false);

  const handlePlus = () => {
    setCountAvatar(countAvatar + 1);
  };

  const handleMinus = () => {
    setCountAvatar(countAvatar - 1);
  };

  // badge vert si positif et rouge si négatif
  const handleBackground = () => {
    return countAvatar > 0 ? { backgroundColor: '#52c41a' } : { backgroundColor: '#c4421a' };
  };

  return (
    <div className="compteurBlock">
      <h1>Compteur de like</h1>
      <div className="imgagesBlock">
        {/* ------- -------- avatar ---------------- */}
        <div className="imgageAndButton">
          <Badge count={countAvatar} style={handleBackground()}>
            {/*  <Avatar shape="square" src={avatar} className="avatar" size={300}/> */}
            <Image preview={{ visible: false }} width={250} src={avatar} onClick={() => setVisible(true)} />
            <div style={{ display: 'none' }}>
              <Image.PreviewGroup preview={{ visible, onVisibleChange: (vis) => setVisible(vis) }}>
                <Image src={avatar} />
              </Image.PreviewGroup>
            </div>
          </Badge>
          <div className="buttonBlock">
            <LikeOutlined style={{ color: '#00ff2a' }} onClick={handlePlus} className="btn btn-good" />
            <DislikeOutlined style={{ color: '#ff0000' }} onClick={handleMinus} className="btn btn-bad" />
          </div>
        </div>
        {/* ------- -------- fin avatar ---------------- */}
        {/* ------- -------- avatar ---------------- */}
        <div className="imgageAndButton">
          <Badge count={countAvatar} style={handleBackground()}>
            {/*  <Avatar shape="square" src={avatar} className="avatar" size={300}/> */}
            <Image preview={{ visible: false }} width={250} src={avatar} onClick={() => setVisible(true)} />
            <div style={{ display: 'none' }}>
              <Image.PreviewGroup preview={{ visible, onVisibleChange: (vis) => setVisible(vis) }}>
                <Image src={avatar} />
              </Image.PreviewGroup>
            </div>
          </Badge>
          <div className="buttonBlock">
            <LikeOutlined style={{ color: '#00ff2a' }} onClick={handlePlus} className="btn btn-good" />
            <DislikeOutlined style={{ color: '#ff0000' }} onClick={handleMinus} className="btn btn-bad" />
          </div>
        </div>
        {/* ------- -------- fin avatar ---------------- */}
      </div>
    </div>
  );
};

export default Compteur;
