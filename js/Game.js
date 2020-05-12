class Game {
  constructor() {
    this.board = new Board();
    this.players = this.createPlayers();
    this.ready = false;
  }

  /**
   * Returns the active player.
   * @returns   {Object}    player - The active player.
   */
  get activePlayer() {
    return this.players.find(player => player.active);
  }

  /** 
   * Creates two player objects.
   * @returns  {Array}    An array of two Player objects.
   */
  createPlayers() {
    const players = [
      new Player('Player 1', 1, '#e15258', true),
      new Player('Player 2', 2, '#e59a13'),
    ];

    return players;
  }

  /**
   * Initializes game.
   */
  startGame() {
    this.board.drawHTMLBoard();
    this.activePlayer.activeToken.drawHTMLToken();
    this.ready = true;
  }

  /**
   * Branches code, depending on what key player presses.
   * @param   {Object}    e - Keydown event object.
   */
  handleKeydown(e) {
    if (this.ready) {
      if (e.key === 'ArrowLeft') {

      } else if (e.key === 'ArrowRight') {

      } else if (e.key === 'ArrowDown') {

      }
    }
  }
}