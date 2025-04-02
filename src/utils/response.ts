export class ResponseHelper {
  static paginate<T>(
    message: string,
    page: number,
    limit: number,
    totalData: number,
    data: T,
  ) {
    return {
      message: message,
      data,
      metadata: {
        page,
        limit,
        total: totalData,
      },
    };
  }

  static success<T>(message: string, data: T) {
    return {
      message: message,
      data,
    };
  }
}
