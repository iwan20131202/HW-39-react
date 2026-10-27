import { useSelector } from "react-redux";

import { selectIsLoggedIn } from "../../redux/auth/selectors";

import {
  Hero,
  Title,
  Accent,
  Description,
  Actions,
  CtaLink,
} from "./HomePage.styled";

export default function HomePage() {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <Hero>
      <Title>
        Your private <Accent>contacts book</Accent>
      </Title>
      <Description>
        Save phone numbers, search by name and keep your collection safe behind
        your own account.
      </Description>

      <Actions>
        {isLoggedIn ? (
          <CtaLink to="/contacts" $primary>
            Open my contacts
          </CtaLink>
        ) : (
          <>
            <CtaLink to="/register" $primary>
              Get started
            </CtaLink>
            <CtaLink to="/login">I already have an account</CtaLink>
          </>
        )}
      </Actions>
    </Hero>
  );
}
