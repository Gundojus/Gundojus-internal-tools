import { Text, Box } from "@quarkly/widgets";
import React from "react";
import { useHistory } from "react-router-dom";

const pages = [
  { title: "Summary", role: "manager", path: "/summary" },
  { title: "Calendar", role: "manager", path: "/calendar" },
  { title: "Orders", role: "manager", path: "/orders" },
  { title: "Add Users", role: "sudo", path: "/sudo/users/add" },
];

export const NavBar = ({ role, current }) => {
  const history = useHistory();

  return (
    <Box
      display="flex"
      justify-content="space-around"
      align-items="center"
      padding="20px"
      background="--color-lightD2"
    >
      {pages
        .filter((page) => page.role === role || role === "sudo")
        .map(
          (page) =>
            page.title !== current && (
              <Text
                key={page.path}
                onClick={() => history.push(page.path)}
                cursor="pointer"
                margin="0 10px"
                font="--lead"
                padding="10px"
                border-radius="5px"
                transition="background-color 0.3s"
                hover-background="--color-light"
                hover-color="--primary"
              >
                {page.title}
              </Text>
            )
        )}
    </Box>
  );
};
