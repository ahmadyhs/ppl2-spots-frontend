import { AxiosError } from "axios";
import { cookies } from "next/headers";
import { apiSecured } from "../../api";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const id = searchParams.get("id");
  const cookie = cookies();
  const token = cookie.get(process.env.TOKEN_NAME);

  async function getSpaceByID() {
    try {
      const response = await apiSecured(`/coworking-spaces/${id}`, {
        headers: {
          Authorization: `Bearer ${token?.value}`,
        },
      });

      return response;
    } catch (error) {
      const err = error as AxiosError;
      return err.response;
    }
  }

  const result = await getSpaceByID();
  return Response.json(result?.data, {
    status: result?.status,
  });
}
