export const PATH = {
  LOGIN: '/',
  REGISTER: '/register',
  RESET_PASSWORD: '/reset',
  MAIN_SCREEN: '/channels/@me',
  DIRECT_MESSAGE: '/channels/@me/{serverId}',
  SERVER_CHANNEL: '/channels/{serverId}/{chatRoomId}',
};

export const deployHostName = process.env.REACT_APP_BASE_URL;
