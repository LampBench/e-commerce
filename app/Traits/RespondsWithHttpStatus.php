<?php

namespace App\Traits;

trait RespondsWithHttpStatus
{
    protected function respondWithSuccess($data, $message = null, $code = 200)
    {
        return response()->json([
            'success' => true,
            'status_code' => $code,
            'message' => $message,
            'data' => $data,
        ], $code);
    }

    protected function respondWithSuccessNoData($message = null, $code = 200)
    {
        return response()->json([
            'success' => true,
            'status_code' => $code,
            'message' => $message,
        ], $code);
    }

    protected function respondWithError($message, $code = 400)
    {
        return response()->json([
            'success' => false,
            'status_code' => $code,
            'message' => $message,
        ], $code);
    }

    protected function respondUnauthorized($message = 'Unauthorized')
    {
        return $this->respondWithError($message, 401);
    }
}
