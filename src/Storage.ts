export class Storage {
  public static localStorageKeys = {
    GAMESTATE: 'gameState',
    GA_CLIENT_ID: btoa('clientId'),
    GA_SESSION_DATA: btoa('sessionData'),
  };

  public static chromeStorageKeys = {
    HIGHSCORE: btoa('highScore'),
    ADS: btoa('stored-ads'),
    INSTALL_VERSION: btoa('installVersion'),
    GA_USER_ID: btoa('userId'),
  };
}
