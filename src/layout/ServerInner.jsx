import { useState } from 'react';
import ServerListItem from 'layout/ServerListItem';
import { PlusIcon } from 'assets/images/icons/fa6';
import { CompassIcon } from 'assets/images/icons/fa';

const ServerInner = () => {
  const [servers, SetServers] = useState([{ name: '123123123' }, { name: '123123123' }, { name: '123123123' }]);

  const handleAddServer = () => {
    SetServers((prevServers) => [
      ...prevServers,
      { link: '', className: '', name: '추가된 서버' }, // 추후 실제 값으로 수정
    ]);
  };

  return (
    <>
      {servers.map((server, index) => (
        <ServerListItem key={index} link={server.link} className={server.className} name={server.name} />
      ))}
      <ServerListItem onClick={handleAddServer} className="distinct" name={<PlusIcon size={20} />} />
      <ServerListItem link="" className="distinct" name={<CompassIcon size={20} />} />
    </>
  );
};

export default ServerInner;
