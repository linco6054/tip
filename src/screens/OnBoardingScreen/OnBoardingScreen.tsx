import React from "react";
import { SafeArea } from "../../components";
import RectangleIcon from "../../Icons/RectangleIcon";
import OnboardingIcon from "../../Icons/OnboardingIcon";
import { useTranslation } from "react-i18next";
import { Button, Center, ScrollView, Text } from "native-base";

const OnBoardingScreen = () => {
  const { t } = useTranslation();
  return (
    <SafeArea style={{ position: "relative" }}>
      <ScrollView>
        <RectangleIcon />
        <OnboardingIcon position="absolute" top={150} left="10%" />

        <Center mt="10">
          <Text fontSize="titleLarge" fontWeight={600}>
            {t("welcome")}
          </Text>
          <Text
            maxW="295px"
            textAlign="center"
            my="5"
            fontSize="Button"
            color="main.gray.4"
            fontFamily="heading"
          >
            {t("welcome_text")}
          </Text>
          <Button my="6" maxW="50%" variant="primary">
            {t("get_started")}
          </Button>
        </Center>
      </ScrollView>
    </SafeArea>
  );
};

export default OnBoardingScreen;
