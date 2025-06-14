import axios from "axios";
import { SERVERS } from "@/shared/constants/general";

export const SERVER_NODE_URL = `${process.env.NEXT_PUBLIC_SERVER_NODE_URL}/api/v1`;
export const SERVER_JAVA_URL = `${process.env.NEXT_PUBLIC_SERVER_JAVA_URL}`;

// Axios instance for Server One (Node)
const serverNodeRequest = axios.create({
  baseURL: SERVER_NODE_URL,
  withCredentials: true,
});

// Axios instance for Server Two (Java)
const serverJavaRequest = axios.create({
  baseURL: SERVER_JAVA_URL,
  withCredentials: true,
});

const handleError = (error) =>
  Promise.reject(error?.response?.data || "Something went wrong");

// Interceptors
serverNodeRequest.interceptors.response.use((res) => res, handleError);
serverJavaRequest.interceptors.response.use((res) => res, handleError);

const getClient = ({ server = SERVERS.node.value }) => {
  return server === SERVERS.java.value ? serverJavaRequest : serverNodeRequest;
};

// POST
export const postRequest =
  ({ server = SERVERS.node.value }) =>
  async ({ endpoint, payload }) => {
    const client = getClient({ server });
    return await client.post(endpoint, payload);
  };

// GET
export const getRequest =
  ({ server = SERVERS.node.value }) =>
  async ({ endpoint }) => {
    const client = getClient({ server });
    return await client.get(endpoint);
  };

// PUT
export const putRequest =
  ({ server = SERVERS.node.value }) =>
  async ({ endpoint, payload }) => {
    const client = getClient({ server });
    return await client.put(endpoint, payload);
  };

// PATCH
export const patchRequest =
  ({ server = SERVERS.node.value }) =>
  async ({ endpoint, payload }) => {
    const client = getClient({ server });
    return await client.patch(endpoint, payload);
  };

// DELETE
export const deleteRequest =
  ({ server = SERVERS.node.value }) =>
  async ({ endpoint }) => {
    const client = getClient({ server });
    return await client.delete(endpoint);
  };
