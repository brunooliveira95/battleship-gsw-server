export default function GetActiveGameControllerBuilder (GetActiveGameUseCase) {
    return async function GetActiveGameController (httpRequest) {
      try {
        const game = await GetActiveGameUseCase.Handle()
        return {
          headers: {
            'Content-Type': 'application/json'
          },
          statusCode: 200,
          body: game
        }
      } catch (e) {
        return {
          headers: {
            'Content-Type': 'application/json'
          },
          statusCode: 500,
          body: {
            error: e.message
          }
        }
      }
    }
  }