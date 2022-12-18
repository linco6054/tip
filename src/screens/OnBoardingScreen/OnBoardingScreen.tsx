import { Button, Center, Text, View } from "native-base";

import CurveIcon from "../../Icons/CurveIcon";
import OnboardingIcon from "../../Icons/OnboardingIcon";
import React from "react";
import { SafeArea } from "../../components";
import { useTranslation } from "react-i18next";

const OnBoardingScreen = () => {
  const { t } = useTranslation();
  return (
    <SafeArea>
      <View style={{ flex: 1 }}>
        <View style={{ flex: 2, position: "relative" }}>
          <CurveIcon style={{ position: "absolute", top: 0, right: 0 }} />
          <OnboardingIcon
            style={{
              position: "absolute",
              top: "10%",
              left: "10%",
            }}
          />
        </View>
        <View style={{ flex: 2 }}>
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
        </View>
      </View>
    </SafeArea>
  );
};

export default OnBoardingScreen;
