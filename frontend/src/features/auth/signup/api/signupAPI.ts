import axiosAuthClient from "@/shared/axios/axiosClient"

interface SignUpRequest {
    id: string;
    password: string;
    nickname: string
}

export const SignUpAPI = async (data: SignUpRequest) => {
    const response = await axiosAuthClient.post(
        "/api/auth/signup", data
    )

    return SignUpAPI
}