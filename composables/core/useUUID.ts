import { v4 as uuidv4 } from "uuid";

export const useUUID = () => {
  const uuid = ref<string>(uuidv4());

  const generateUUID = () => {
    uuid.value = uuidv4();
  };
  return { uuid, generateUUID };
};
