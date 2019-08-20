export default function CreateGameControllerBuilder (CreateGameUseCase) {
    return async function CreateGameController (httpRequest) {
      try {
        const game = await CreateGameUseCase.Handle(httpRequest.body)
        return {
          headers: {
            'Content-Type': 'application/json'
          },
          statusCode: 201,
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