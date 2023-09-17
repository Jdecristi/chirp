export const processEmailIntoUsername = (emailAddress: string) => {
  const regex = /@(.*)$/;
  return emailAddress.replace(regex, "");
};
