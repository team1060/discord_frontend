export const API_URL = {
  // USER-API
  STATE: '/api/user/state',
  USER_CHANGEPW: '/api/user/changepw',
  USER_CHANGENICKNAME: '/api/user/changenickname',
  EMAIL_PUT: '/api/email',
  EMAIL_POST: '/api/email',
  PROFILE_IMG: '/api/user/profile/img',
  PROFILE_IMG_RESET: '/api/user/profile/img/reset',
  REGISTER_GET: '/api/register',
  REGISTER_POST: '/api/register',
  REFRESH: '/api/refresh',
  LOGOUT: '/api/logout',
  LOGIN: '/api/login',
  USER_SEARCH: '/api/user/serach',
  USER_PROFILE: (userId) => `/api/user/profile/${userId}`,
  EMAIL_GET: (tokenLink) => `/api/email/${tokenLink}`,

  //FRIEND-API
  FRIEND_REQ: '/api/user/friend/request',
  FRIEND_RESP: (fromUserId) => `/api/user/friend/response/${fromUserId}`,
  FRIEND_ONLINE: (fromUserId) => `/api/user/friend/online/${fromUserId}`,
  FRIEND_ONLINE_COUNT: (fromUserId) => `/api/user/friend/online/count/${fromUserId}`,
  FRIEND_LIST: (fromUserId) => `/api/user/friend/list/${fromUserId}`,
  FRIEND_LIST_COUNT: (fromUserId) => `/api/user/friend/list/count/${fromUserId}`,
  FRIEND_DELETE: (friendId) => `/api/user/friend/${friendId}`,
  FRIEND_REQ_DELETE: (friendRequestId) => `/api/user/friend/request/${friendRequestId}`,
};

// 토큰 필요 없는 URL
export const HEADER_NOT_REQUIRED_TOKEN_URLS = [API_URL.LOGIN, API_URL.REGISTER_POST, API_URL.EMAIL_POST];

// Form data로 전송 필요한 URL
export const FORM_DATA_REQUIRED_URLS = [];
