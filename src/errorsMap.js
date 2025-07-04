/**
 * Central RFC7807 Error Mapping (English)
 * Add/edit error codes here for universal API error & doc coverage
 */
module.exports = {
  bad_request: {
    title: 'Bad Request',
    status: 400,
    detail: 'The request was invalid.',
    solution: 'Check and correct your API request according to the documentation.',
    example: {
      type: 'https://api.domain.com/errors/bad_request',
      title: 'Bad Request',
      status: 400,
      detail: 'The request was invalid.',
      instance: '/v1/some-endpoint'
    }
  },
  unauthorized: {
    title: 'Unauthorized',
    status: 401,
    detail: 'Authentication is required or invalid.',
    solution: 'Log in with valid credentials or obtain an API key.',
    example: {
      type: 'https://api.domain.com/errors/unauthorized',
      title: 'Unauthorized',
      status: 401,
      detail: 'Authentication is required or invalid.',
      instance: '/v1/private-endpoint'
    }
  },
  forbidden: {
    title: 'Forbidden',
    status: 403,
    detail: 'You do not have permission to access this resource.',
    solution: 'Request access or contact administrator.',
    example: {
      type: 'https://api.domain.com/errors/forbidden',
      title: 'Forbidden',
      status: 403,
      detail: 'You do not have permission to access this resource.',
      instance: '/v1/admin-area'
    }
  },
  not_found: {
    title: 'Resource Not Found',
    status: 404,
    detail: 'The requested resource could not be found.',
    solution: 'Verify the endpoint or resource ID.',
    example: {
      type: 'https://api.domain.com/errors/not_found',
      title: 'Resource Not Found',
      status: 404,
      detail: 'The requested resource could not be found.',
      instance: '/v1/resource/123'
    }
  },
  conflict: {
    title: 'Conflict',
    status: 409,
    detail: 'A conflict occurred with the current state of the resource.',
    solution: 'Review resource state and retry the request.',
    example: {
      type: 'https://api.domain.com/errors/conflict',
      title: 'Conflict',
      status: 409,
      detail: 'A conflict occurred with the current state of the resource.',
      instance: '/v1/resource/123'
    }
  },
  validation: {
    title: 'Validation Failed',
    status: 422,
    detail: 'Input validation failed.',
    solution: 'Please check and correct all required fields.',
    example: {
      type: 'https://api.domain.com/errors/validation',
      title: 'Validation Failed',
      status: 422,
      detail: 'Input is not valid.',
      instance: '/v1/user/register',
      errors: {
        email: ['Invalid format'],
        password: ['Too short']
      }
    }
  },
  rate_limit: {
    title: 'Too Many Requests',
    status: 429,
    detail: 'Too many requests. Rate limit exceeded.',
    solution: 'Wait and try again later.',
    example: {
      type: 'https://api.domain.com/errors/rate_limit',
      title: 'Too Many Requests',
      status: 429,
      detail: 'Too many requests. Rate limit exceeded.',
      instance: '/v1/any-endpoint'
    }
  },
  internal: {
    title: 'Internal Server Error',
    status: 500,
    detail: 'An unexpected error occurred on the server.',
    solution: 'Try again later or contact support.',
    example: {
      type: 'https://api.domain.com/errors/internal',
      title: 'Internal Server Error',
      status: 500,
      detail: 'An unexpected error occurred on the server.',
      instance: '/v1/any-endpoint'
    }
  },
  not_implemented: {
    title: 'Not Implemented',
    status: 501,
    detail: 'This endpoint is not implemented.',
    solution: 'Refer to the API documentation or contact support.',
    example: {
      type: 'https://api.domain.com/errors/not_implemented',
      title: 'Not Implemented',
      status: 501,
      detail: 'This endpoint is not implemented.',
      instance: '/v1/feature'
    }
  },
  service_unavailable: {
    title: 'Service Unavailable',
    status: 503,
    detail: 'The service is temporarily unavailable.',
    solution: 'Try again later.',
    example: {
      type: 'https://api.domain.com/errors/service_unavailable',
      title: 'Service Unavailable',
      status: 503,
      detail: 'The service is temporarily unavailable.',
      instance: '/v1/any-endpoint'
    }
  },
}