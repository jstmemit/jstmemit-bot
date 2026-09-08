import type { ITemplatesRepository } from "#/interfaces/ITemplatesRepository.ts";
import type { Template } from "#/models/Template.ts";
import type { TemplateMapKey } from "#/models/TemplateMapKey.ts";
import { type TemplateTopic } from "#/models/TemplateTopic.ts";
import { TopicLocalizationMap } from "#/data/topicLocalizationMap.ts";
import type { LocalizationMap } from "discord.js";
import { topBottomText } from "#/templates/topBottomText.tsx";
import { explains } from "#/templates/explains.tsx";
import { liveReaction } from "#/templates/liveReaction.tsx";
import { spongebobBurningTheNote } from "#/templates/spongebobBurningTheNote.tsx";
import { looksAtPaperAngry } from "#/templates/looksAtPaperAngry.tsx";
import { homerHiding } from "#/templates/homerHiding.tsx";
import { isThisAPigeon } from "#/templates/isThisAPigeon.tsx";
import { buzz } from "#/templates/buzz.tsx";
import { cowLookingIntoOcean } from "#/templates/cowLookingIntoOcean.tsx";
import { manLookingUp } from "#/templates/manLookingUp.tsx";
import { uncanny } from "#/templates/uncanny.tsx";
import { tf2Hahaha } from "#/templates/tf2Hahaha.tsx";
import { yesChad } from "#/templates/yesChad.tsx";
import { quoteCenterText } from "#/templates/quoteCenterText.tsx";
import { stonks } from "#/templates/stonks.tsx";
import { stonks1 } from "#/templates/stonks1.tsx";
import { disappointedGuy } from "#/templates/disappointedGuy.tsx";
import { disappointedGuy1 } from "#/templates/disappointedGuy1.tsx";
import { disasterGirl } from "#/templates/disasterGirl.tsx";
import { dogAndTeblet } from "#/templates/dogAndTeblet.tsx";
import { missingPiece } from "#/templates/missingPiece.tsx";
import { newsReporterSitting } from "#/templates/newsReporterSitting.tsx";
import { sleepyThinking } from "#/templates/sleepyThinking.tsx";
import { wojackPoint } from "#/templates/wojackPoint.tsx";
import { absoluteCinema } from "#/templates/absoluteCinema.tsx";
import { bearArrest } from "#/templates/bearArrest.tsx";
import { awkwardLookMonkey } from "#/templates/awkwardLookMonkey.tsx";
import { crowdFromAngryToHappy } from "#/templates/crowdFromAngryToHappy.tsx";
import { diagramIQ } from "#/templates/diagramIQ.tsx";
import { blooInBed } from "#/templates/blooInBed.tsx";
import { iAdopted100Dogs } from "#/templates/iAdopted100Dogs.tsx";
import { iGotHuntedByARealBountyHunter } from "#/templates/iGotHuntedByARealBountyHunter.tsx";
import { oneDollarPrivateIsland } from "#/templates/oneDollarPrivateIsland.tsx";
import { spongebobHappy } from "#/templates/spongebobHappy.tsx";
import { worldsMostDangerousTrap } from "#/templates/worldsMostDangerousTrap.tsx";
import { connor } from "#/templates/connor.tsx";
import { dogeWithGlasses } from "#/templates/dogeWithGlasses.tsx";
import { expandingBrain } from "#/templates/expandingBrain.tsx";
import { expandingBrain1 } from "#/templates/expandingBrain1.tsx";
import { explainingWhiteboard } from "#/templates/explainingWhiteboard.tsx";
import { grokTweet } from "#/templates/grokTweet.tsx";
import { iSteppedInShit } from "#/templates/iSteppedInShit.tsx";
import { lookAtThis } from "#/templates/lookAtThis.tsx";
import { moneyTonyStark } from "#/templates/moneyTonyStark.tsx";
import { monkeyThinking } from "#/templates/monkeyThinking.tsx";
import { mrMcMahonReaction } from "#/templates/mrMcMahonReaction.tsx";
import { myHeartBlank } from "#/templates/myHeartBlank.tsx";
import { myHonestReaction } from "#/templates/myHonestReaction.tsx";
import { nerdDog } from "#/templates/nerdDog.tsx";
import { owlStareAtYou } from "#/templates/owlStareAtYou.tsx";
import { sadMan } from "#/templates/sadMan.tsx";
import { spidermanDouble } from "#/templates/spidermanDouble.tsx";
import { starTrekThinking } from "#/templates/starTrekThinking.tsx";
import { tf2ScoutTalk } from "#/templates/tf2ScoutTalk.tsx";
import { tryingToExplain } from "#/templates/tryingToExplain.tsx";
import { willSmith } from "#/templates/willSmith.tsx";
import { winnieThePooh } from "#/templates/winnieThePooh.tsx";
import { winnieThePooh1 } from "#/templates/winnieThePooh1.tsx";
import { womanYellingAtACat } from "#/templates/womanYellingAtACat.tsx";
import { iInterviewedAnimals } from "#/templates/iInterviewedAnimals.tsx";
import { catIsCalling } from "#/templates/catIsCalling.tsx";
import { spongebobShowsSign } from "#/templates/spongebobShowsSign.tsx";
import { post } from "#/templates/post.tsx";
import { fuckMyChudLife } from "#/templates/fuckMyChudLife.tsx";
import { ukGovernmentToBanPeople } from "#/templates/ukGovernmentToBanPeople.tsx";
import { bernieSandersLive } from "#/templates/bernieSandersLive.tsx";
import { theyAllGoIntoSquareHole } from "#/templates/theyAllGoIntoSquareHole.tsx";
import { purestCookie } from "#/templates/purestCookie.tsx";
import { applyingForJobsWithFunnyPfp } from "#/templates/applyingForJobsWithFunnyPfp.tsx";
import { boykisserEnergy } from "#/templates/boykisserEnergy.tsx";
import { creativeMetaphor } from "#/templates/creativeMetaphor.tsx";
import { britishCuisine } from "#/templates/britishCuisine.tsx";
import { soGladIGrewUpWithThis } from "#/templates/soGladIGrewUpWithThis.tsx";
import { bumperSticker } from "#/templates/bumperSticker.tsx";
import { falklandWolf } from "#/templates/falklandWolf.tsx";
import { pleaseBePatient } from "#/templates/pleaseBePatient.tsx";
import { bbCooking } from "#/templates/bbCooking.tsx";
import { bbLetsCook } from "#/templates/bbLetsCook.tsx";
import { bbSayMyName } from "#/templates/bbSayMyName.tsx";
import { futuramaNotSureIfFry } from "#/templates/futuramaNotSureIfFry.tsx";
import { futuramaShutUpAndTakeMyMoney } from "#/templates/futuramaShutUpAndTakeMyMoney.tsx";
import { griffinsElephantAndPenguin } from "#/templates/griffinsElephantAndPenguin.tsx";
import { griffinsPeterGriffinRunningAway } from "#/templates/griffinsPeterGriffinRunningAway.tsx";
import { griffinsPeterGriffinThinking } from "#/templates/griffinsPeterGriffinThinking.tsx";
import { griffinsPeterWaitingForSomething } from "#/templates/griffinsPeterWaitingForSomething.tsx";
import { monaLisa } from "#/templates/monaLisa.tsx";
import { mrBeanWaiting } from "#/templates/mrBeanWaiting.tsx";
import { mrBeanWaiting1 } from "#/templates/mrBeanWaiting1.tsx";
import { pfAllToghether } from "#/templates/pfAllToghether.tsx";
import { pfCoffeeScene } from "#/templates/pfCoffeeScene.tsx";
import { pfConfusedTravolta } from "#/templates/pfConfusedTravolta.tsx";
import { pfSayWhatOneMoreTime } from "#/templates/pfSayWhatOneMoreTime.tsx";
import { pfTwoGangsterWithGuns } from "#/templates/pfTwoGangsterWithGuns.tsx";
import { saltBae } from "#/templates/saltBae.tsx";
import { sdFredUnmaskingGhost } from "#/templates/sdFredUnmaskingGhost.tsx";
import { simpsonsLIsaShowPresentation } from "#/templates/simpsonsLIsaShowPresentation.tsx";
import { simpsonsRalphImInDanger } from "#/templates/simpsonsRalphImInDanger.tsx";
import { spidermanPeterDance } from "#/templates/spidermanPeterDance.tsx";
import { spidermanPeterParkerWearingGlasses } from "#/templates/spidermanPeterParkerWearingGlasses.tsx";
import { spongebobBeggingVsTuxedo } from "#/templates/spongebobBeggingVsTuxedo.tsx";
import { dhGirlWithHandOverMouth } from "#/templates/dhGirlWithHandOverMouth.tsx";
import { griffinsLoisInBed } from "#/templates/griffinsLoisInBed.tsx";
import { cinemaGuys } from "#/templates/cinemaGuys.tsx";
import { incomingCall } from "#/templates/incomingCall.tsx";
import { spongebobSacredTextBook } from "#/templates/spongebobSacredTextBook.tsx";
import { griffinsPeterSkinColor } from "#/templates/griffinsPeterSkinColor.tsx";
import { spongebobLongTodoList } from "#/templates/spongebobLongTodoList.tsx";
import { spongebobRainbow } from "#/templates/spongebobRainbow.tsx";
import { spongebobCaveman } from "#/templates/spongebobCaveman.tsx";
import { spongebobMonolith } from "#/templates/spongebobMonolith.tsx";
import { spongebobGrin } from "#/templates/spongebobGrin.tsx";
import { simpsonsHomerReadingBook } from "#/templates/simpsonsHomerReadingBook.tsx";
import { simpsonsMoeKickingOutBarney } from "#/templates/simpsonsMoeKickingOutBarney.tsx";
import { simpsonsThatsAPaddlin } from "#/templates/simpsonsThatsAPaddlin.tsx";
import { simpsonsTheWorstDayOfYourLifeSoFar } from "#/templates/simpsonsTheWorstDayOfYourLifeSoFar.tsx";
import { simpsonsHomerInLesbianBar } from "#/templates/simpsonsHomerInLesbianBar.tsx";
import { simpsonsMonkeyInHomerHead } from "#/templates/simpsonsMonkeyInHomerHead.tsx";
import { simpsonsScaryNews } from "#/templates/simpsonsScaryNews.tsx";
import { simpsonsAdultLisaAndBart } from "#/templates/simpsonsAdultLisaAndBart.tsx";
import { simpsonsMoeHoldingGunToHead } from "#/templates/simpsonsMoeHoldingGunToHead.tsx";
import { spongebobProud } from "#/templates/spongebobProud.tsx";
import { simpsonsWhatIsInHomersHead } from "#/templates/simpsonsWhatIsInHomersHead.tsx";
import { simpsonsWhatIsInHomersHead1 } from "#/templates/simpsonsWhatIsInHomersHead1.tsx";
import { quoteBottomText } from "#/templates/quoteBottomText.tsx";
import { quoteTopText } from "#/templates/quoteTopText.tsx";
import { simpsonsBartHitsHomerWithChair } from "#/templates/simpsonsBartHitsHomerWithChair.tsx";
import { griffinsPaddedWalls } from "#/templates/griffinsPaddedWalls.tsx";
import { griffinsPeterHurtsHisKnee } from "#/templates/griffinsPeterHurtsHisKnee.tsx";
import { futuramaFryReadingLetter } from "#/templates/futuramaFryReadingLetter.tsx";
import { futuramaBenderCaptcha } from "#/templates/futuramaBenderCaptcha.tsx";
import { futuramaBenderScared } from "#/templates/futuramaBenderScared.tsx";
import { futuramaZeroDaysSinceLast } from "#/templates/futuramaZeroDaysSinceLast.tsx";
import { simpsonsLemmyThinking } from "#/templates/simpsonsLemmyThinking.tsx";
import { simpsonsTwoSidesOfMrBurns } from "#/templates/simpsonsTwoSidesOfMrBurns.tsx";
import { simpsonsWhyYouLittle } from "#/templates/simpsonsWhyYouLittle.tsx";
import { futuramaFrySleeplessInsomnia } from "#/templates/futuramaFrySleeplessInsomnia.tsx";
import { futuramaZappBranniganAsDrake } from "#/templates/futuramaZappBranniganAsDrake.tsx";
import { futuramaBenderAsDrake } from "#/templates/futuramaBenderAsDrake.tsx";
import { futuramaSkeletons } from "#/templates/futuramaSkeletons.tsx";
import { futuramaToasterBoo } from "#/templates/futuramaToasterBoo.tsx";
import { spongebobHandsomeFace } from "#/templates/spongebobHandsomeFace.tsx";
import { griffinsPeterPickingADonkey } from "#/templates/griffinsPeterPickingADonkey.tsx";
import { griffinsPeterWriteALetter } from "#/templates/griffinsPeterWriteALetter.tsx";
import { griffinsPeterVsChicken } from "#/templates/griffinsPeterVsChicken.tsx";
import { simpsonsAtLeastYouTried } from "#/templates/simpsonsAtLeastYouTried.tsx";
import { simpsonsLisaStaring } from "#/templates/simpsonsLisaStaring.tsx";
import { simpsonsNotMyBoyfriendShirt } from "#/templates/simpsonsNotMyBoyfriendShirt.tsx";
import { parrotBarber } from "#/templates/parrotBarber.tsx";
import { parrotBarber1 } from "#/templates/parrotBarber1.tsx";
import { parrotBarber2 } from "#/templates/parrotBarber2.tsx";
import { acNowKillHim } from "#/templates/acNowKillHim.tsx";
import { acsrMisakaMikotoDrakeMeme } from "#/templates/acsrMisakaMikotoDrakeMeme.tsx";
import { acsrMisakaMikotoPlayingDSOnBus } from "#/templates/acsrMisakaMikotoPlayingDSOnBus.tsx";
import { adHowAreYouFineThankYouMeme } from "#/templates/adHowAreYouFineThankYouMeme.tsx";
import { adOsakaSeriousFace } from "#/templates/adOsakaSeriousFace.tsx";
import { adOsakaStaring } from "#/templates/adOsakaStaring.tsx";
import { adWhyAreYouSpeakingInEnglish } from "#/templates/adWhyAreYouSpeakingInEnglish.tsx";
import { animeSakuraDisapprovalRikoShrug } from "#/templates/animeSakuraDisapprovalRikoShrug.tsx";
import { animeTheThreeStagesOfApproval } from "#/templates/animeTheThreeStagesOfApproval.tsx";
import { aotErenYeagerHappyVsDepressed } from "#/templates/aotErenYeagerHappyVsDepressed.tsx";
import { arobmiAngrySistineFibel } from "#/templates/arobmiAngrySistineFibel.tsx";
import { arobmiCryingSistine } from "#/templates/arobmiCryingSistine.tsx";
import { arobmiSistineFibelPointingFinger } from "#/templates/arobmiSistineFibelPointingFinger.tsx";
import { arobmiSistineFibelTeaSip } from "#/templates/arobmiSistineFibelTeaSip.tsx";
import { arobmiSurprisedSistine } from "#/templates/arobmiSurprisedSistine.tsx";
import { blendsChibiMaikaCheering } from "#/templates/blendsChibiMaikaCheering.tsx";
import { blendsHideriFingerTapping } from "#/templates/blendsHideriFingerTapping.tsx";
import { blendsHideriHeartHands } from "#/templates/blendsHideriHeartHands.tsx";
import { blendsHideriKanzakiSmugFace } from "#/templates/blendsHideriKanzakiSmugFace.tsx";
import { blendsHideriMaidUniformWink } from "#/templates/blendsHideriMaidUniformWink.tsx";
import { blendsHideriSmugFace } from "#/templates/blendsHideriSmugFace.tsx";
import { blendsKahoAndMaikaMaids } from "#/templates/blendsKahoAndMaikaMaids.tsx";
import { blendsMaidCast } from "#/templates/blendsMaidCast.tsx";
import { blendsMaikaAngryPanic } from "#/templates/blendsMaikaAngryPanic.tsx";
import { blendsMaikaSadisticSmile } from "#/templates/blendsMaikaSadisticSmile.tsx";
import { blendsMaikaShockedPanic } from "#/templates/blendsMaikaShockedPanic.tsx";
import { blendsMaikaUhHuh } from "#/templates/blendsMaikaUhHuh.tsx";
import { blendsSnoopDoggFace } from "#/templates/blendsSnoopDoggFace.tsx";
import { btrBocchiAnxietyWave } from "#/templates/btrBocchiAnxietyWave.tsx";
import { btrBocchiAnxiousSmiling } from "#/templates/btrBocchiAnxiousSmiling.tsx";
import { btrBocchiBreakingBadWalter } from "#/templates/btrBocchiBreakingBadWalter.tsx";
import { btrBocchiDepressedCorner } from "#/templates/btrBocchiDepressedCorner.tsx";
import { btrBocchiDizzyPanic } from "#/templates/btrBocchiDizzyPanic.tsx";
import { btrBocchiExhaustedFace } from "#/templates/btrBocchiExhaustedFace.tsx";
import { btrBocchiGlitchPanic } from "#/templates/btrBocchiGlitchPanic.tsx";
import { btrBocchiHappy } from "#/templates/btrBocchiHappy.tsx";
import { btrBocchiLyingAwake } from "#/templates/btrBocchiLyingAwake.tsx";
import { btrBocchiPaleShock } from "#/templates/btrBocchiPaleShock.tsx";
import { btrBocchiScaredScream } from "#/templates/btrBocchiScaredScream.tsx";
import { btrBocchiSoulLeavingBody } from "#/templates/btrBocchiSoulLeavingBody.tsx";
import { btrBocchiSpiralEyesPanic } from "#/templates/btrBocchiSpiralEyesPanic.tsx";
import { btrBocchiMeltdownFace } from "#/templates/btrBocchiMeltdownFace.tsx";
import { ceDavidTraumatizedFace } from "#/templates/ceDavidTraumatizedFace.tsx";
import { ceLucyCryingDavidChad } from "#/templates/ceLucyCryingDavidChad.tsx";
import { ceLucyHacking } from "#/templates/ceLucyHacking.tsx";
import { ceLucyLaughingVsCold } from "#/templates/ceLucyLaughingVsCold.tsx";
import { ceRebeccaCalmVsAngry } from "#/templates/ceRebeccaCalmVsAngry.tsx";
import { ceRebeccaDrake } from "#/templates/ceRebeccaDrake.tsx";
import { ceRebeccaSquidward } from "#/templates/ceRebeccaSquidward.tsx";
import { dandadanShockedTurboGranny } from "#/templates/dandadanShockedTurboGranny.tsx";
import { dandadanTurboGrannyCatSquintedEyes } from "#/templates/dandadanTurboGrannyCatSquintedEyes.tsx";
import { dandadanTurboGrannyCatSquintedEyes1 } from "#/templates/dandadanTurboGrannyCatSquintedEyes1.tsx";
import { dfragRokaShibasakiDisguise } from "#/templates/dfragRokaShibasakiDisguise.tsx";
import { dfragRokaShibasaki } from "#/templates/dfragRokaShibasaki.tsx";
import { ceRebeccaDisgusted } from "#/templates/ceRebeccaDisgusted.tsx";
import { ditfZeroTwoHeh } from "#/templates/ditfZeroTwoHeh.tsx";
import { ditfZeroTwoWhatever } from "#/templates/ditfZeroTwoWhatever.tsx";
import { ditfZeroTwoWhatever1 } from "#/templates/ditfZeroTwoWhatever1.tsx";
import { ditfTheTwoSidesOfZeroTwo } from "#/templates/ditfTheTwoSidesOfZeroTwo.tsx";
import { ceLucyHacking1 } from "#/templates/ceLucyHacking1.tsx";
import { wnlFuminoRealization1 } from "#/templates/wnlFuminoRealization1.tsx";
import { ditfZeroTwoHuggingPaper } from "#/templates/ditfZeroTwoHuggingPaper.tsx";
import { dnDarkRoomThinking } from "#/templates/dnDarkRoomThinking.tsx";
import { dnLSmile } from "#/templates/dnLSmile.tsx";
import { dnLSmirkFinger } from "#/templates/dnLSmirkFinger.tsx";
import { dnLStaring } from "#/templates/dnLStaring.tsx";
import { dnLTwoFaces } from "#/templates/dnLTwoFaces.tsx";
import { dsFreeHugsVsDeluxeHugs } from "#/templates/dsFreeHugsVsDeluxeHugs.tsx";
import { dsGenyaHospitalBed } from "#/templates/dsGenyaHospitalBed.tsx";
import { dsGiyuTomiokaDeadpan } from "#/templates/dsGiyuTomiokaDeadpan.tsx";
import { dsNezukoIsBeautiful } from "#/templates/dsNezukoIsBeautiful.tsx";
import { dsTanjiroChibiAngry } from "#/templates/dsTanjiroChibiAngry.tsx";
import { dsTanjiroHappyChibi } from "#/templates/dsTanjiroHappyChibi.tsx";
import { dsTanjiroLookingAtPhone } from "#/templates/dsTanjiroLookingAtPhone.tsx";
import { dsTanjiroSumiko } from "#/templates/dsTanjiroSumiko.tsx";
import { evangelionAsukaLangleyDisappointedLook } from "#/templates/evangelionAsukaLangleyDisappointedLook.tsx";
import { evangelionShinjiCalmVsPanic } from "#/templates/evangelionShinjiCalmVsPanic.tsx";
import { evangelionShinjiIkariChairDepression } from "#/templates/evangelionShinjiIkariChairDepression.tsx";
import { evangelionShinjiIkariListeningToMusic } from "#/templates/evangelionShinjiIkariListeningToMusic.tsx";
import { evangelionShinjiIkariMentalBreakdown } from "#/templates/evangelionShinjiIkariMentalBreakdown.tsx";
import { evangelionShinjiIkariPanicAttack } from "#/templates/evangelionShinjiIkariPanicAttack.tsx";
import { evangelionShinjiSeriousFace } from "#/templates/evangelionShinjiSeriousFace.tsx";
import { frierenBlowingKiss } from "#/templates/frierenBlowingKiss.tsx";
import { frierenBlowingKissChuu } from "#/templates/frierenBlowingKissChuu.tsx";
import { frierenBlowingKissToFlamme } from "#/templates/frierenBlowingKissToFlamme.tsx";
import { frierenFlammeShowingSerieDrawing } from "#/templates/frierenFlammeShowingSerieDrawing.tsx";
import { frierenInspiration } from "#/templates/frierenInspiration.tsx";
import { frierenLiftedUp } from "#/templates/frierenLiftedUp.tsx";
import { frierenExpectationVsReality } from "#/templates/frierenExpectationVsReality.tsx";
import { frierenSmugVsDark } from "#/templates/frierenSmugVsDark.tsx";
import { frierenSittingAndSmiling } from "#/templates/frierenSittingAndSmiling.tsx";
import { frierenSmilingCrying } from "#/templates/frierenSmilingCrying.tsx";
import { frierenSmugCatFaceCloseUp } from "#/templates/frierenSmugCatFaceCloseUp.tsx";
import { frierenSmugPotion } from "#/templates/frierenSmugPotion.tsx";
import { gdoSataniaCrying } from "#/templates/gdoSataniaCrying.tsx";
import { gdoSataniaDeathNote } from "#/templates/gdoSataniaDeathNote.tsx";
import { gdoSataniaDisappointed } from "#/templates/gdoSataniaDisappointed.tsx";
import { gdoSataniaShocked } from "#/templates/gdoSataniaShocked.tsx";
import { gdoSataniaLaugh } from "#/templates/gdoSataniaLaugh.tsx";
import { gdoSataniaThumbsUp } from "#/templates/gdoSataniaThumbsUp.tsx";
import { gintamaGintokiCreepyFace } from "#/templates/gintamaGintokiCreepyFace.tsx";
import { gintamaGintokiDarkFace } from "#/templates/gintamaGintokiDarkFace.tsx";
import { gintamaGintokiDrinkingBeer } from "#/templates/gintamaGintokiDrinkingBeer.tsx";
import { gintamaGintokiManiacLaugh } from "#/templates/gintamaGintokiManiacLaugh.tsx";
import { gintamaGintokiNosePickThumbsUp } from "#/templates/gintamaGintokiNosePickThumbsUp.tsx";
import { gintamaGintokiPointingUp } from "#/templates/gintamaGintokiPointingUp.tsx";
import { gintamaGintokiRealizationStages } from "#/templates/gintamaGintokiRealizationStages.tsx";
import { gintamaGintokiScaredGhost } from "#/templates/gintamaGintokiScaredGhost.tsx";
import { gintamaGintokiSmirk } from "#/templates/gintamaGintokiSmirk.tsx";
import { gintamaGintokiSurprisedFace } from "#/templates/gintamaGintokiSurprisedFace.tsx";
import { gintamaGintokiUnderstood } from "#/templates/gintamaGintokiUnderstood.tsx";
import { gintamaGintokiRealizationStages1 } from "#/templates/gintamaGintokiRealizationStages1.tsx";
import { hucSylphynfordTachibanaWithAGun } from "#/templates/hucSylphynfordTachibanaWithAGun.tsx";
import { hucUmaruHamsterHoodie } from "#/templates/hucUmaruHamsterHoodie.tsx";
import { hucUmaruSmugFace } from "#/templates/hucUmaruSmugFace.tsx";
import { hucUmaruSunglassesSmug } from "#/templates/hucUmaruSunglassesSmug.tsx";
import { hucUmaruWhiningCry } from "#/templates/hucUmaruWhiningCry.tsx";
import { jkHigurumaCoveringFaceStare } from "#/templates/jkHigurumaCoveringFaceStare.tsx";
import { jkHigurumaCoveringFaceStare1 } from "#/templates/jkHigurumaCoveringFaceStare1.tsx";
import { jkKidMegumiSeriouslyBro } from "#/templates/jkKidMegumiSeriouslyBro.tsx";
import { jkRizzSukuna } from "#/templates/jkRizzSukuna.tsx";
import { jkSatoruGojoNahIdWin } from "#/templates/jkSatoruGojoNahIdWin.tsx";
import { jkSatoruGojoNahIdWin1 } from "#/templates/jkSatoruGojoNahIdWin1.tsx";
import { jkSatoruGojoNahIdWin2 } from "#/templates/jkSatoruGojoNahIdWin2.tsx";
import { kaguyasamaBakaguya } from "#/templates/kaguyasamaBakaguya.tsx";
import { kaguyasamaChikaFujiwaraFadingSmile } from "#/templates/kaguyasamaChikaFujiwaraFadingSmile.tsx";
import { kaguyasamaChikaFujiwaraHappyVsShocked } from "#/templates/kaguyasamaChikaFujiwaraHappyVsShocked.tsx";
import { kaguyasamaKaguyaDroppingPhone } from "#/templates/kaguyasamaKaguyaDroppingPhone.tsx";
import { kaguyasamaKaguyaDroppingPhone1 } from "#/templates/kaguyasamaKaguyaDroppingPhone1.tsx";
import { konAzusaNoThanks } from "#/templates/konAzusaNoThanks.tsx";
import { konAzusaNoThanks1 } from "#/templates/konAzusaNoThanks1.tsx";
import { konosubaAquaBarnShock } from "#/templates/konosubaAquaBarnShock.tsx";
import { konosubaAquaCryingFace } from "#/templates/konosubaAquaCryingFace.tsx";
import { konosubaAquaPanic } from "#/templates/konosubaAquaPanic.tsx";
import { konosubaAquaNervousSmug } from "#/templates/konosubaAquaNervousSmug.tsx";
import { lhShiroeBigBrain } from "#/templates/lhShiroeBigBrain.tsx";
import { lightVsDark } from "#/templates/lightVsDark.tsx";
import { lsWindowsXPWallpaper } from "#/templates/lsWindowsXPWallpaper.tsx";
import { mhaDekuAllMightFace } from "#/templates/mhaDekuAllMightFace.tsx";
import { monsterKenzoTenmaBeforeAfter } from "#/templates/monsterKenzoTenmaBeforeAfter.tsx";
import { noragamiYatoNoragamiMoneyFloor } from "#/templates/noragamiYatoNoragamiMoneyFloor.tsx";
import { noragamiYatoNoragamiMoneyFloor1 } from "#/templates/noragamiYatoNoragamiMoneyFloor1.tsx";
import { rtnobgsMaiSakurajimaPhoneReaction } from "#/templates/rtnobgsMaiSakurajimaPhoneReaction.tsx";
import { selLainStare } from "#/templates/selLainStare.tsx";
import { selLainFunnyILaugh } from "#/templates/selLainFunnyILaugh.tsx";
import { selLainImFineScreen } from "#/templates/selLainImFineScreen.tsx";
import { sfAnyaForgerDisgustFace } from "#/templates/sfAnyaForgerDisgustFace.tsx";
import { sfAnyaForgerSmugShush } from "#/templates/sfAnyaForgerSmugShush.tsx";
import { sfAnyaStudyingHard } from "#/templates/sfAnyaStudyingHard.tsx";
import { sgPlayer456HappyVsDepressed } from "#/templates/sgPlayer456HappyVsDepressed.tsx";
import { shirobakoWorkStress } from "#/templates/shirobakoWorkStress.tsx";
import { shirobakoWorkStress1 } from "#/templates/shirobakoWorkStress1.tsx";
import { shirobakoWorkStress2 } from "#/templates/shirobakoWorkStress2.tsx";
import { shirobakoWorkStress3 } from "#/templates/shirobakoWorkStress3.tsx";
import { tbobsJamesFrancoFirstTime } from "#/templates/tbobsJamesFrancoFirstTime.tsx";
import { thisPersonIs100kmNearYourHouse } from "#/templates/thisPersonIs100kmNearYourHouse.tsx";
import { toradoraCriticalHit } from "#/templates/toradoraCriticalHit.tsx";
import { toradoraMinoriAndTaigaCryingSalute } from "#/templates/toradoraMinoriAndTaigaCryingSalute.tsx";
import { toradoraMinoriHoldingDocument } from "#/templates/toradoraMinoriHoldingDocument.tsx";
import { toradoraMinoriHoldingDocument1 } from "#/templates/toradoraMinoriHoldingDocument1.tsx";
import { toradoraMinoriTwoMoods } from "#/templates/toradoraMinoriTwoMoods.tsx";
import { toradoraTaigaAndAmiChibiAnimalEars } from "#/templates/toradoraTaigaAndAmiChibiAnimalEars.tsx";
import { toradoraTaigaCatchesRyuujiAndAmi } from "#/templates/toradoraTaigaCatchesRyuujiAndAmi.tsx";
import { toradoraTaigaChristmasDonut } from "#/templates/toradoraTaigaChristmasDonut.tsx";
import { toradoraTaigaCreepySmile } from "#/templates/toradoraTaigaCreepySmile.tsx";
import { toradoraTaigaHoldingHead } from "#/templates/toradoraTaigaHoldingHead.tsx";
import { toradoraTaigaHoldingLeek } from "#/templates/toradoraTaigaHoldingLeek.tsx";
import { toradoraTaigaHoldingLeek1 } from "#/templates/toradoraTaigaHoldingLeek1.tsx";
import { toradoraTaigaMorningMisanthropeDemotivator } from "#/templates/toradoraTaigaMorningMisanthropeDemotivator.tsx";
import { toradoraTaigaStartled } from "#/templates/toradoraTaigaStartled.tsx";
import { toradoraTaigaWideGrin } from "#/templates/toradoraTaigaWideGrin.tsx";
import { tqqNinoAndMikuLookingAtYou } from "#/templates/tqqNinoAndMikuLookingAtYou.tsx";
import { tqqNinoNakanoHappyVsSad } from "#/templates/tqqNinoNakanoHappyVsSad.tsx";
import { ucwthoTsukiUzakiWhatAreYouSaying } from "#/templates/ucwthoTsukiUzakiWhatAreYouSaying.tsx";
import { wnlFuminoRealization } from "#/templates/wnlFuminoRealization.tsx";
import { wnlFuminoRealization2 } from "#/templates/wnlFuminoRealization2.tsx";
import { wnlFuminoRealization3 } from "#/templates/wnlFuminoRealization3.tsx";
import { wnlMafuyuKirisuIntrovert } from "#/templates/wnlMafuyuKirisuIntrovert.tsx";
import { wnlMafuyuKirisuMenacing } from "#/templates/wnlMafuyuKirisuMenacing.tsx";
import { snkNekoNekoyamadaCuteSleeves } from "#/templates/snkNekoNekoyamadaCuteSleeves.tsx";
import { ditfZeroTwoHuggingPaper1 } from "#/templates/ditfZeroTwoHuggingPaper1.tsx";
import { blendsMafuyuHoshikawaSparkle } from "#/templates/blendsMafuyuHoshikawaSparkle.tsx";
import { acNagisaCalm } from "#/templates/acNagisaCalm.tsx";
import { acNagisaNotes } from "#/templates/acNagisaNotes.tsx";
import { acsrMisakaAtack } from "#/templates/acsrMisakaAtack.tsx";
import { acsrMisakaRailgun } from "#/templates/acsrMisakaRailgun.tsx";
import { adChiyoAngryCrying } from "#/templates/adChiyoAngryCrying.tsx";
import { adChiyoChangingPigtails } from "#/templates/adChiyoChangingPigtails.tsx";
import { adChiyoPanic } from "#/templates/adChiyoPanic.tsx";
import { adChiyoShocked } from "#/templates/adChiyoShocked.tsx";
import { adKaguraLaughing } from "#/templates/adKaguraLaughing.tsx";
import { adKaguraPanic } from "#/templates/adKaguraPanic.tsx";
import { adOsakaPool } from "#/templates/adOsakaPool.tsx";
import { adOsakaStudying } from "#/templates/adOsakaStudying.tsx";
import { adOsakaWithSoap } from "#/templates/adOsakaWithSoap.tsx";
import { adTomoAndOsakaAgree } from "#/templates/adTomoAndOsakaAgree.tsx";
import { adTomoBoasting } from "#/templates/adTomoBoasting.tsx";
import { arobmiSistineAndRumiaShocked } from "#/templates/arobmiSistineAndRumiaShocked.tsx";
import { acNagisaNotes1 } from "#/templates/acNagisaNotes1.tsx";
import { arobmiSistineBlush } from "#/templates/arobmiSistineBlush.tsx";
import { arobmiSistineBlush1 } from "#/templates/arobmiSistineBlush1.tsx";
import { arobmiSistineConfused } from "#/templates/arobmiSistineConfused.tsx";
import { arobmiSistineShocked } from "#/templates/arobmiSistineShocked.tsx";
import { blendsHideriKanzakiSmugFace1 } from "#/templates/blendsHideriKanzakiSmugFace1.tsx";
import { blendsKahoFlustered } from "#/templates/blendsKahoFlustered.tsx";
import { blendsMaikaAngryPanic1 } from "#/templates/blendsMaikaAngryPanic1.tsx";
import { blendsMaikaBlush } from "#/templates/blendsMaikaBlush.tsx";
import { blendsMaikaInnocent } from "#/templates/blendsMaikaInnocent.tsx";
import { blendsMaikaNo } from "#/templates/blendsMaikaNo.tsx";
import { blendsMafuyuPlusEyes } from "#/templates/blendsMafuyuPlusEyes.tsx";
import { blendsMaikaSadisticEyes } from "#/templates/blendsMaikaSadisticEyes.tsx";
import { blendsMaikaWithCat } from "#/templates/blendsMaikaWithCat.tsx";
import { btrBocchiCrying } from "#/templates/btrBocchiCrying.tsx";
import { btrBocchiDefeated } from "#/templates/btrBocchiDefeated.tsx";
import { btrBocchiDizzy } from "#/templates/btrBocchiDizzy.tsx";
import { btrBocchiExcited } from "#/templates/btrBocchiExcited.tsx";
import { btrBocchiExplosion } from "#/templates/btrBocchiExplosion.tsx";
import { btrBocchiGlitch } from "#/templates/btrBocchiGlitch.tsx";
import { btrBocchiHeartAttack } from "#/templates/btrBocchiHeartAttack.tsx";
import { btrBocchiHiding } from "#/templates/btrBocchiHiding.tsx";
import { btrBocchiNo } from "#/templates/btrBocchiNo.tsx";
import { btrBocchiPanic } from "#/templates/btrBocchiPanic.tsx";
import { btrBocchiPerform } from "#/templates/btrBocchiPerform.tsx";
import { btrBocchiSpiralEyesPanic1 } from "#/templates/btrBocchiSpiralEyesPanic1.tsx";
import { btrNijikaGoodbye } from "#/templates/btrNijikaGoodbye.tsx";
import { umAgnesTachyonUncanny } from "#/templates/umAgnesTachyonUncanny.tsx";
import { dandadanJijiPoint } from "#/templates/dandadanJijiPoint.tsx";
import { dandadanMomoSmug } from "#/templates/dandadanMomoSmug.tsx";
import { dandadanOkarunAura } from "#/templates/dandadanOkarunAura.tsx";
import { dandadanOkarunWriting } from "#/templates/dandadanOkarunWriting.tsx";
import { dandadanTurboGrannyDance } from "#/templates/dandadanTurboGrannyDance.tsx";
import { dandadanTurboGrannyHearingMusic } from "#/templates/dandadanTurboGrannyHearingMusic.tsx";
import { dfragRokaDarkness } from "#/templates/dfragRokaDarkness.tsx";
import { ditfZeroTwoCrying } from "#/templates/ditfZeroTwoCrying.tsx";
import { ditfZeroTwoSmile } from "#/templates/ditfZeroTwoSmile.tsx";
import { dnNearListening } from "#/templates/dnNearListening.tsx";
import { dnNearShocked } from "#/templates/dnNearShocked.tsx";
import { frierenCold } from "#/templates/frierenCold.tsx";
import { frierenCrying } from "#/templates/frierenCrying.tsx";
import { frierenFernFrustratedFrom67 } from "#/templates/frierenFernFrustratedFrom67.tsx";
import { frierenFernFrustratedFrom671 } from "#/templates/frierenFernFrustratedFrom671.tsx";
import { frierenLightning } from "#/templates/frierenLightning.tsx";
import { frierenWarming } from "#/templates/frierenWarming.tsx";
import { gdoGabrielCozy } from "#/templates/gdoGabrielCozy.tsx";
import { gdoGabrielEating } from "#/templates/gdoGabrielEating.tsx";
import { gdoRaphielAraAra } from "#/templates/gdoRaphielAraAra.tsx";
import { gdoRaphielSmile } from "#/templates/gdoRaphielSmile.tsx";
import { gdoSataniaAngryCrying } from "#/templates/gdoSataniaAngryCrying.tsx";
import { gdoSataniaEvilSmart } from "#/templates/gdoSataniaEvilSmart.tsx";
import { gdoSataniaEvilSmart1 } from "#/templates/gdoSataniaEvilSmart1.tsx";
import { gdoSataniaLaughing } from "#/templates/gdoSataniaLaughing.tsx";
import { gdoSataniaLaughing1 } from "#/templates/gdoSataniaLaughing1.tsx";
import { gdoSataniaThumbsUp1 } from "#/templates/gdoSataniaThumbsUp1.tsx";
import { gdoTapiocaPoint } from "#/templates/gdoTapiocaPoint.tsx";
import { officeDwightScreaming } from "#/templates/officeDwightScreaming.tsx";
import { officeKevinICant } from "#/templates/officeKevinICant.tsx";
import { officeMichaelCringe } from "#/templates/officeMichaelCringe.tsx";
import { officeMichaelExcited } from "#/templates/officeMichaelExcited.tsx";
import { officeMichaelParkour } from "#/templates/officeMichaelParkour.tsx";
import { officeStanleyBlinking } from "#/templates/officeStanleyBlinking.tsx";
import { robotVacuumArtist } from "#/templates/robotVacuumArtist.tsx";
import { spongebobAlone } from "#/templates/spongebobAlone.tsx";
import { spongebobBreathing } from "#/templates/spongebobBreathing.tsx";
import { spongebobExam } from "#/templates/spongebobExam.tsx";
import { spongebobFingerGuns } from "#/templates/spongebobFingerGuns.tsx";
import { spongebobGrimace } from "#/templates/spongebobGrimace.tsx";
import { tf2PyroOnFire } from "#/templates/tf2PyroOnFire.tsx";
import { tf2PyroOnFire1 } from "#/templates/tf2PyroOnFire1.tsx";
import { tf2WhatIsLove } from "#/templates/tf2WhatIsLove.tsx";
import { toradoraTaigaAngryCrying } from "#/templates/toradoraTaigaAngryCrying.tsx";
import { tsAngryKenClapping } from "#/templates/tsAngryKenClapping.tsx";
import { tsAngryKenClapping1 } from "#/templates/tsAngryKenClapping1.tsx";
import { tsWoodyCrazy } from "#/templates/tsWoodyCrazy.tsx";
import { tsWoodyStare } from "#/templates/tsWoodyStare.tsx";
import { wnlFuminoSoulLeaving } from "#/templates/wnlFuminoSoulLeaving.tsx";
import { userDemotivator } from "#/templates/userDemotivator.tsx";
import { eightySixHenriettaAngry } from "#/templates/eightySixHenriettaAngry.tsx";
import { barakamonNaruSlap } from "#/templates/barakamonNaruSlap.tsx";
import { gintamaGintokiChocolate } from "#/templates/gintamaGintokiChocolate.tsx";
import { gintamaGintokiCool } from "#/templates/gintamaGintokiCool.tsx";
import { gintamaGintokiDisgusted } from "#/templates/gintamaGintokiDisgusted.tsx";
import { gintamaGintokiMocking } from "#/templates/gintamaGintokiMocking.tsx";
import { gintamaGintokiSeriousAndGoofy } from "#/templates/gintamaGintokiSeriousAndGoofy.tsx";
import { gintamaGintokiSeriousAura } from "#/templates/gintamaGintokiSeriousAura.tsx";
import { gintamaGintokiShocked } from "#/templates/gintamaGintokiShocked.tsx";
import { gintamaGintokiSpillingDrink } from "#/templates/gintamaGintokiSpillingDrink.tsx";
import { gintamaKaguraAnnoyed } from "#/templates/gintamaKaguraAnnoyed.tsx";
import { gintamaKaguraSike } from "#/templates/gintamaKaguraSike.tsx";
import { gintamaGintokiGintokiRippingShirt } from "#/templates/gintamaGintokiGintokiRippingShirt.tsx";
import { gjbuKasumiBites } from "#/templates/gjbuKasumiBites.tsx";
import { gtoOnizukaCrying } from "#/templates/gtoOnizukaCrying.tsx";
import { gtoOnizukaEating } from "#/templates/gtoOnizukaEating.tsx";
import { gtoOnizukaSmiling } from "#/templates/gtoOnizukaSmiling.tsx";
import { gtoOnizukaWalkingWithSpray } from "#/templates/gtoOnizukaWalkingWithSpray.tsx";
import { hucUmaruAngryPout } from "#/templates/hucUmaruAngryPout.tsx";
import { hucUmaruCoolSunglasses } from "#/templates/hucUmaruCoolSunglasses.tsx";
import { hucUmaruCryingLoudly } from "#/templates/hucUmaruCryingLoudly.tsx";
import { hucUmaruEvilSmirk } from "#/templates/hucUmaruEvilSmirk.tsx";
import { hucUmaruExcited } from "#/templates/hucUmaruExcited.tsx";
import { hucUmaruFactory } from "#/templates/hucUmaruFactory.tsx";
import { hucUmaruGamingAndSliding } from "#/templates/hucUmaruGamingAndSliding.tsx";
import { hucUmaruHeadpat } from "#/templates/hucUmaruHeadpat.tsx";
import { hucUmaruInterruptedDuringGaming } from "#/templates/hucUmaruInterruptedDuringGaming.tsx";
import { hucUmaruLightSwitch } from "#/templates/hucUmaruLightSwitch.tsx";
import { hucUmaruMaracasDance } from "#/templates/hucUmaruMaracasDance.tsx";
import { hucUmaruPlayingDS } from "#/templates/hucUmaruPlayingDS.tsx";
import { hucUmaruPouting } from "#/templates/hucUmaruPouting.tsx";
import { hucUmaruRagingFire } from "#/templates/hucUmaruRagingFire.tsx";
import { hucUmaruRunningCrying } from "#/templates/hucUmaruRunningCrying.tsx";
import { hucUmaruSleeping } from "#/templates/hucUmaruSleeping.tsx";
import { hucUmaruSliding } from "#/templates/hucUmaruSliding.tsx";
import { hucUmaruStarEyes } from "#/templates/hucUmaruStarEyes.tsx";
import { hucUmaruTantrum } from "#/templates/hucUmaruTantrum.tsx";
import { hucUmaruTearingUp } from "#/templates/hucUmaruTearingUp.tsx";
import { hucUmaruTransformation } from "#/templates/hucUmaruTransformation.tsx";
import { jetCrash } from "#/templates/jetCrash.tsx";
import { missleAtack } from "#/templates/missleAtack.tsx";
import { policeCarCrash } from "#/templates/policeCarCrash.tsx";
import { jkHigurumaCoveringFace } from "#/templates/jkHigurumaCoveringFace.tsx";
import { jkSukunaDomainExpansion } from "#/templates/jkSukunaDomainExpansion.tsx";
import { jkSukunaSmirking } from "#/templates/jkSukunaSmirking.tsx";
import { jkSukunaTransformation } from "#/templates/jkSukunaTransformation.tsx";
import { kaguyaKaguyaAngry } from "#/templates/kaguyaKaguyaAngry.tsx";
import { kaguyasamaChikaDancing } from "#/templates/kaguyasamaChikaDancing.tsx";
import { kaguyasamaChikaDetectiveSmile } from "#/templates/kaguyasamaChikaDetectiveSmile.tsx";
import { kaguyasamaChikaExcited } from "#/templates/kaguyasamaChikaExcited.tsx";
import { kaguyasamaChikaGiggling } from "#/templates/kaguyasamaChikaGiggling.tsx";
import { kaguyasamaChikaHappy } from "#/templates/kaguyasamaChikaHappy.tsx";
import { kaguyasamaChikaHeartEyes } from "#/templates/kaguyasamaChikaHeartEyes.tsx";
import { kaguyasamaChikaHittingIshigami } from "#/templates/kaguyasamaChikaHittingIshigami.tsx";
import { kaguyasamaChikaHorrified } from "#/templates/kaguyasamaChikaHorrified.tsx";
import { kaguyasamaChikaPouting } from "#/templates/kaguyasamaChikaPouting.tsx";
import { kaguyasamaHayasakaShy } from "#/templates/kaguyasamaHayasakaShy.tsx";
import { kaguyasamaHayasakaUnimpressed } from "#/templates/kaguyasamaHayasakaUnimpressed.tsx";
import { kaguyasamaKaguyaCatEars } from "#/templates/kaguyasamaKaguyaCatEars.tsx";
import { kaguyasamaKaguyaCryingPout } from "#/templates/kaguyasamaKaguyaCryingPout.tsx";
import { kaguyasamaKaguyaExcided } from "#/templates/kaguyasamaKaguyaExcided.tsx";
import { kaguyasamaKaguyaHappy } from "#/templates/kaguyasamaKaguyaHappy.tsx";
import { kaguyasamaKaguyaIntenseBlush } from "#/templates/kaguyasamaKaguyaIntenseBlush.tsx";
import { kaguyasamaKaguyaLaughing } from "#/templates/kaguyasamaKaguyaLaughing.tsx";
import { kaguyasamaKaguyaNervousTea } from "#/templates/kaguyasamaKaguyaNervousTea.tsx";
import { kaguyasamaKaguyaPanicking } from "#/templates/kaguyasamaKaguyaPanicking.tsx";
import { kaguyasamaKaguyaRomantic } from "#/templates/kaguyasamaKaguyaRomantic.tsx";
import { kaguyasamaMikoPointingAngry } from "#/templates/kaguyasamaMikoPointingAngry.tsx";
import { kaguyasamaShiroganeNervous } from "#/templates/kaguyasamaShiroganeNervous.tsx";
import { kaguyasamaShiroganeScared } from "#/templates/kaguyasamaShiroganeScared.tsx";
import { konMugiExcited } from "#/templates/konMugiExcited.tsx";
import { konMugiPointing } from "#/templates/konMugiPointing.tsx";
import { konosubaAquaBegging } from "#/templates/konosubaAquaBegging.tsx";
import { konosubaAquaCrying } from "#/templates/konosubaAquaCrying.tsx";
import { konosubaAquaCrying1 } from "#/templates/konosubaAquaCrying1.tsx";
import { konosubaAquaCryingSmilingFace } from "#/templates/konosubaAquaCryingSmilingFace.tsx";
import { konosubaAquaEatingGround } from "#/templates/konosubaAquaEatingGround.tsx";
import { konosubaAquaCondescending } from "#/templates/konosubaAquaCondescending.tsx";
import { konosubaAquaPanicking } from "#/templates/konosubaAquaPanicking.tsx";
import { konosubaAquaPleading } from "#/templates/konosubaAquaPleading.tsx";
import { konosubaAquaShadowSmirk } from "#/templates/konosubaAquaShadowSmirk.tsx";
import { konosubaAquaSmug } from "#/templates/konosubaAquaSmug.tsx";
import { konosubaAquaTantrum } from "#/templates/konosubaAquaTantrum.tsx";
import { konosubaAquaThinking } from "#/templates/konosubaAquaThinking.tsx";
import { konosubaDarknessHappy } from "#/templates/konosubaDarknessHappy.tsx";
import { konosubaDarknessSwingingSword } from "#/templates/konosubaDarknessSwingingSword.tsx";
import { konosubaKazumaSaluting } from "#/templates/konosubaKazumaSaluting.tsx";
import { konosubaMeguminApproves } from "#/templates/konosubaMeguminApproves.tsx";
import { konosubaMeguminCryingSmilingFace } from "#/templates/konosubaMeguminCryingSmilingFace.tsx";
import { konosubaMeguminHuggingStaff } from "#/templates/konosubaMeguminHuggingStaff.tsx";
import { konosubaMeguminIntroducingHerself } from "#/templates/konosubaMeguminIntroducingHerself.tsx";
import { konosubaMeguminSmiling } from "#/templates/konosubaMeguminSmiling.tsx";
import { konosubaMeguminSmug } from "#/templates/konosubaMeguminSmug.tsx";
import { gtoUrumiPhoneCall } from "#/templates/gtoUrumiPhoneCall.tsx";
import { konYuiCryingWindow } from "#/templates/konYuiCryingWindow.tsx";
import { konYuiDoublePeace } from "#/templates/konYuiDoublePeace.tsx";
import { konYuiHappySmile } from "#/templates/konYuiHappySmile.tsx";
import { lhAkatsukiBlush } from "#/templates/lhAkatsukiBlush.tsx";
import { lhAkatsukiRolling } from "#/templates/lhAkatsukiRolling.tsx";
import { lhShiroeGlassesPush } from "#/templates/lhShiroeGlassesPush.tsx";
import { lhShiroeNervous } from "#/templates/lhShiroeNervous.tsx";
import { lhShiroeScheming } from "#/templates/lhShiroeScheming.tsx";
import { llMakiHappy } from "#/templates/llMakiHappy.tsx";
import { lsKonataApologizing } from "#/templates/lsKonataApologizing.tsx";
import { lsKonataHi } from "#/templates/lsKonataHi.tsx";
import { lsKonataCantConcentrate } from "#/templates/lsKonataCantConcentrate.tsx";
import { lsKonataDancing } from "#/templates/lsKonataDancing.tsx";
import { lsKonataGaming } from "#/templates/lsKonataGaming.tsx";
import { lsKonataGamingSmug } from "#/templates/lsKonataGamingSmug.tsx";
import { lsKonataHappy } from "#/templates/lsKonataHappy.tsx";
import { lsKonataNerd } from "#/templates/lsKonataNerd.tsx";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import { readdirSync, readFileSync } from "node:fs";
import { lsKonataPhonePanic } from "#/templates/lsKonataPhonePanic.tsx";
import { lsKonataReadingManga } from "#/templates/lsKonataReadingManga.tsx";
import { lsKonataSneezing } from "#/templates/lsKonataSneezing.tsx";
import { lsKonataTryingToExplaing } from "#/templates/lsKonataTryingToExplaing.tsx";
import { lsKonataTryingToExplaing1 } from "#/templates/lsKonataTryingToExplaing1.tsx";
import { lsKonataWaitingForRamen } from "#/templates/lsKonataWaitingForRamen.tsx";
import { lsKonataWaitingForRamen1 } from "#/templates/lsKonataWaitingForRamen1.tsx";
import { lsKonataYawning } from "#/templates/lsKonataYawning.tsx";
import { lsMiyukiAndTsukasa } from "#/templates/lsMiyukiAndTsukasa.tsx";
import { lsTsukasaBitingPhone } from "#/templates/lsTsukasaBitingPhone.tsx";
import { lsTsukasaSleeping } from "#/templates/lsTsukasaSleeping.tsx";
import { mhaBabyDekuExcited } from "#/templates/mhaBabyDekuExcited.tsx";
import { mhaBakugoGrinning } from "#/templates/mhaBakugoGrinning.tsx";
import { mhaDekuAllMightFace1 } from "#/templates/mhaDekuAllMightFace1.tsx";
import { mhaDekuAndEriDetermined } from "#/templates/mhaDekuAndEriDetermined.tsx";
import { mhaDekuLunging } from "#/templates/mhaDekuLunging.tsx";
import { mhaDekuPunching } from "#/templates/mhaDekuPunching.tsx";
import { mhaDekuWinningRace } from "#/templates/mhaDekuWinningRace.tsx";
import { mhaEriExcited } from "#/templates/mhaEriExcited.tsx";
import { mhaTodorokiSmiling } from "#/templates/mhaTodorokiSmiling.tsx";
import { monsterJohanAndTenmaStaring } from "#/templates/monsterJohanAndTenmaStaring.tsx";
import { monsterTenmaEating } from "#/templates/monsterTenmaEating.tsx";
import { nichijouHakaseDrinkingMilk } from "#/templates/nichijouHakaseDrinkingMilk.tsx";
import { nichijouHakaseLaughingHearts } from "#/templates/nichijouHakaseLaughingHearts.tsx";
import { nichijouHakasePanicking } from "#/templates/nichijouHakasePanicking.tsx";
import { nichijouHakaseShocked } from "#/templates/nichijouHakaseShocked.tsx";
import { nichijouHakaseShocked1 } from "#/templates/nichijouHakaseShocked1.tsx";
import { nichijouHakaseSparkling } from "#/templates/nichijouHakaseSparkling.tsx";
import { nichijouMioDetermined } from "#/templates/nichijouMioDetermined.tsx";
import { nichijouMioDetermined1 } from "#/templates/nichijouMioDetermined1.tsx";
import { nichijouMioRunningDesperately } from "#/templates/nichijouMioRunningDesperately.tsx";
import { nichijouSakamotoHeldUp } from "#/templates/nichijouSakamotoHeldUp.tsx";
import { nichijouSakamotoMesmerized } from "#/templates/nichijouSakamotoMesmerized.tsx";
import { nichijouSakamotoStruggling } from "#/templates/nichijouSakamotoStruggling.tsx";
import { nichijouYuukoMioHandshake } from "#/templates/nichijouYuukoMioHandshake.tsx";
import { noragamiHiyoriLooking } from "#/templates/noragamiHiyoriLooking.tsx";
import { noragamiHiyoriShockedBlush } from "#/templates/noragamiHiyoriShockedBlush.tsx";
import { noragamiKofukuShocked } from "#/templates/noragamiKofukuShocked.tsx";
import { noragamiKofukuSmiling } from "#/templates/noragamiKofukuSmiling.tsx";
import { noragamiYatoGodOfCalamity } from "#/templates/noragamiYatoGodOfCalamity.tsx";
import { noragamiYatoShocked } from "#/templates/noragamiYatoShocked.tsx";
import { noragamiYatoSmiling } from "#/templates/noragamiYatoSmiling.tsx";
import { noragamiYukineBlushingGeek } from "#/templates/noragamiYukineBlushingGeek.tsx";
import { noragamiYatoHeartbroken } from "#/templates/noragamiYatoHeartbroken.tsx";
import { noragamiYatoHeartbroken1 } from "#/templates/noragamiYatoHeartbroken1.tsx";
import { noragamiYatoSmile } from "#/templates/noragamiYatoSmile.tsx";
import { opmSaitamaEatingSonicsSword } from "#/templates/opmSaitamaEatingSonicsSword.tsx";
import { opmSaitamaHeroForm } from "#/templates/opmSaitamaHeroForm.tsx";
import { opmSaitamaPunch } from "#/templates/opmSaitamaPunch.tsx";
import { opmSaitamaRunning } from "#/templates/opmSaitamaRunning.tsx";
import { opmSaitamaSleeping } from "#/templates/opmSaitamaSleeping.tsx";
import { opmSaitamasPunch } from "#/templates/opmSaitamasPunch.tsx";
import { opmSaitamaUnbothered } from "#/templates/opmSaitamaUnbothered.tsx";
import { rtnobgsFutabaAnnoyed } from "#/templates/rtnobgsFutabaAnnoyed.tsx";
import { rtnobgsFutabaDisappointed } from "#/templates/rtnobgsFutabaDisappointed.tsx";
import { rtnobgsKaedeSmiling } from "#/templates/rtnobgsKaedeSmiling.tsx";
import { rtnobgsKaedeThinking } from "#/templates/rtnobgsKaedeThinking.tsx";
import { rtnobgsMaiBlush } from "#/templates/rtnobgsMaiBlush.tsx";
import { rtnobgsMaiFingerGun } from "#/templates/rtnobgsMaiFingerGun.tsx";
import { rtnobgsMaiJudging } from "#/templates/rtnobgsMaiJudging.tsx";
import { rtnobgsMaiJudging1 } from "#/templates/rtnobgsMaiJudging1.tsx";
import { rtnobgsMaiPointing } from "#/templates/rtnobgsMaiPointing.tsx";
import { rtnobgsMaiSakurajimaApproves } from "#/templates/rtnobgsMaiSakurajimaApproves.tsx";
import { rtnobgsMaiSakurajimaTurnsAndApproves } from "#/templates/rtnobgsMaiSakurajimaTurnsAndApproves.tsx";
import { selLainBlankStare } from "#/templates/selLainBlankStare.tsx";
import { selLainClown } from "#/templates/selLainClown.tsx";
import { selLainHologram } from "#/templates/selLainHologram.tsx";
import { selLainStaring } from "#/templates/selLainStaring.tsx";
import { selLainStaring1 } from "#/templates/selLainStaring1.tsx";
import { sfAnyaCrossingArms } from "#/templates/sfAnyaCrossingArms.tsx";
import { sfAnyaCrossingArms1 } from "#/templates/sfAnyaCrossingArms1.tsx";
import { sfAnyaDarkSmirk } from "#/templates/sfAnyaDarkSmirk.tsx";
import { sfAnyaDesperateGrip } from "#/templates/sfAnyaDesperateGrip.tsx";
import { sfAnyaExcitedPrincess } from "#/templates/sfAnyaExcitedPrincess.tsx";
import { sfAnyaPaleShock } from "#/templates/sfAnyaPaleShock.tsx";
import { sfAnyaShocked } from "#/templates/sfAnyaShocked.tsx";
import { sfAnyaSobbingOnCouch } from "#/templates/sfAnyaSobbingOnCouch.tsx";
import { sfAnyaStarEyes } from "#/templates/sfAnyaStarEyes.tsx";
import { sfAnyaTearingUp } from "#/templates/sfAnyaTearingUp.tsx";
import { sfLoidOnGuard } from "#/templates/sfLoidOnGuard.tsx";
import { sfLoidSighing } from "#/templates/sfLoidSighing.tsx";
import { sfYorAngry } from "#/templates/sfYorAngry.tsx";
import { sgGiHunSmiling } from "#/templates/sgGiHunSmiling.tsx";
import { sgPlayersCelebrating } from "#/templates/sgPlayersCelebrating.tsx";
import { shirobakoAoiAirQuotes } from "#/templates/shirobakoAoiAirQuotes.tsx";
import { shirobakoAoiBlankStare } from "#/templates/shirobakoAoiBlankStare.tsx";
import { shirobakoAoiBlush } from "#/templates/shirobakoAoiBlush.tsx";
import { shirobakoAoiDetermined } from "#/templates/shirobakoAoiDetermined.tsx";
import { shirobakoAoiDizzy } from "#/templates/shirobakoAoiDizzy.tsx";
import { shirobakoAoiExhausted } from "#/templates/shirobakoAoiExhausted.tsx";
import { shirobakoAoiPanicking } from "#/templates/shirobakoAoiPanicking.tsx";
import { shirobakoAoiStressedPhoneCall } from "#/templates/shirobakoAoiStressedPhoneCall.tsx";
import { shirobakoEmaSmiling } from "#/templates/shirobakoEmaSmiling.tsx";
import { shirobakoEmaYasuharaBlush } from "#/templates/shirobakoEmaYasuharaBlush.tsx";
import { shirobakoYanoTalking } from "#/templates/shirobakoYanoTalking.tsx";
import { snkNokoNosePick } from "#/templates/snkNokoNosePick.tsx";
import { snkNokoShikanokoDeerArmy } from "#/templates/snkNokoShikanokoDeerArmy.tsx";
import { snkNokoShikanokoDeerArmy1 } from "#/templates/snkNokoShikanokoDeerArmy1.tsx";
import { snkNokotanEmptyHead } from "#/templates/snkNokotanEmptyHead.tsx";
import { tqqIchikaHappy } from "#/templates/tqqIchikaHappy.tsx";
import { tqqItsukiBlushing } from "#/templates/tqqItsukiBlushing.tsx";
import { tqqItsukiDizzy } from "#/templates/tqqItsukiDizzy.tsx";
import { tqqItsukiShocked } from "#/templates/tqqItsukiShocked.tsx";
import { tqqItsukiSmiling } from "#/templates/tqqItsukiSmiling.tsx";
import { tqqMikuBlush } from "#/templates/tqqMikuBlush.tsx";
import { tqqMikuPoutingBlueAura } from "#/templates/tqqMikuPoutingBlueAura.tsx";
import { tqqMikuPoutingOnFire } from "#/templates/tqqMikuPoutingOnFire.tsx";
import { tqqMikuSmiling } from "#/templates/tqqMikuSmiling.tsx";
import { tqqNinoCrying } from "#/templates/tqqNinoCrying.tsx";
import { tqqNinoMenacingSmile } from "#/templates/tqqNinoMenacingSmile.tsx";
import { tqqNinoShopping } from "#/templates/tqqNinoShopping.tsx";
import { tqqNinoTense } from "#/templates/tqqNinoTense.tsx";
import { tqqYotsubaEatingCake } from "#/templates/tqqYotsubaEatingCake.tsx";
import { tqqYotsubaFlustered } from "#/templates/tqqYotsubaFlustered.tsx";
import { tqqYotsubaPanicking } from "#/templates/tqqYotsubaPanicking.tsx";
import { tqqYotsubaSurprisedBlush } from "#/templates/tqqYotsubaSurprisedBlush.tsx";
import { tqqYotsubaWinter } from "#/templates/tqqYotsubaWinter.tsx";
import { ucwthoUzakiHanaSmug } from "#/templates/ucwthoUzakiHanaSmug.tsx";
import { ucwthoUzakiHanaSmugLaugh } from "#/templates/ucwthoUzakiHanaSmugLaugh.tsx";
import { ucwthoUzakiLaughing } from "#/templates/ucwthoUzakiLaughing.tsx";
import { ucwthoUzakiLaughs } from "#/templates/ucwthoUzakiLaughs.tsx";
import { ucwthoUzakiOrdersEverything } from "#/templates/ucwthoUzakiOrdersEverything.tsx";
import { ucwthoUzakiTryingToExplain } from "#/templates/ucwthoUzakiTryingToExplain.tsx";
import { ucwthoUzakiYelling } from "#/templates/ucwthoUzakiYelling.tsx";
import { umAgnesTachyonSmile } from "#/templates/umAgnesTachyonSmile.tsx";
import { umSpecialWeekSprinting } from "#/templates/umSpecialWeekSprinting.tsx";
import { umTokaiTeioShocked } from "#/templates/umTokaiTeioShocked.tsx";
import { umDaiwaAndVodkaCheekPinch } from "#/templates/umDaiwaAndVodkaCheekPinch.tsx";
import { umSpecialWeekRunningWithCarrot } from "#/templates/umSpecialWeekRunningWithCarrot.tsx";
import { umOguriCapSweating } from "#/templates/umOguriCapSweating.tsx";
import { umSpecialWeekSurprised } from "#/templates/umSpecialWeekSurprised.tsx";
import { umTMOperaOLaughing } from "#/templates/umTMOperaOLaughing.tsx";
import { acNagisaNotes2 } from "#/templates/acNagisaNotes2.tsx";
import { acNagisaSmile } from "#/templates/acNagisaSmile.tsx";
import { adKaguraPanic1 } from "#/templates/adKaguraPanic1.tsx";
import { acsrMisakaAngry } from "#/templates/acsrMisakaAngry.tsx";
import { acsrMisakaAngry1 } from "#/templates/acsrMisakaAngry1.tsx";
import { adChiyoAngryCrying1 } from "#/templates/adChiyoAngryCrying1.tsx";
import { adChiyoCrying } from "#/templates/adChiyoCrying.tsx";
import { adChiyoPanic1 } from "#/templates/adChiyoPanic1.tsx";
import { adChiyoShocked1 } from "#/templates/adChiyoShocked1.tsx";
import { adKaguraLaughing1 } from "#/templates/adKaguraLaughing1.tsx";
import { adKaguraPanic2 } from "#/templates/adKaguraPanic2.tsx";
import { adKaguraPanic3 } from "#/templates/adKaguraPanic3.tsx";
import { adKaguraPanic4 } from "#/templates/adKaguraPanic4.tsx";
import { adOsakaNerd } from "#/templates/adOsakaNerd.tsx";
import { adOsakaPool1 } from "#/templates/adOsakaPool1.tsx";
import { adOsakaZonedOut } from "#/templates/adOsakaZonedOut.tsx";
import { adTomoAndOsakaStaring } from "#/templates/adTomoAndOsakaStaring.tsx";
import { adTomoBoasting1 } from "#/templates/adTomoBoasting1.tsx";
import { arobmiSistineAndRumiaShocked1 } from "#/templates/arobmiSistineAndRumiaShocked1.tsx";
import { arobmiSistineBlush2 } from "#/templates/arobmiSistineBlush2.tsx";
import { arobmiSistineShocked1 } from "#/templates/arobmiSistineShocked1.tsx";
import { arobmiSistineConfused1 } from "#/templates/arobmiSistineConfused1.tsx";
import { arobmiSistineNeutral } from "#/templates/arobmiSistineNeutral.tsx";
import { arobmiSistineUtterlyConfused } from "#/templates/arobmiSistineUtterlyConfused.tsx";
import { barakamonNaruSlapHuh } from "#/templates/barakamonNaruSlapHuh.tsx";
import { blendsKahoFlustered1 } from "#/templates/blendsKahoFlustered1.tsx";
import { blendsMaikaBlush1 } from "#/templates/blendsMaikaBlush1.tsx";
import { blendsMafuyuPlusEyes1 } from "#/templates/blendsMafuyuPlusEyes1.tsx";
import { blendsMaikaSadisticSmile1 } from "#/templates/blendsMaikaSadisticSmile1.tsx";
import { blendsMaikaSmile } from "#/templates/blendsMaikaSmile.tsx";
import { btrBocchiDefeated1 } from "#/templates/btrBocchiDefeated1.tsx";
import { btrBocchiDefeated2 } from "#/templates/btrBocchiDefeated2.tsx";
import { btrBocchiDoubtful } from "#/templates/btrBocchiDoubtful.tsx";
import { btrBocchiExcited1 } from "#/templates/btrBocchiExcited1.tsx";
import { btrBocchiHiding1 } from "#/templates/btrBocchiHiding1.tsx";
import { btrBocchiNeutral } from "#/templates/btrBocchiNeutral.tsx";
import { btrBocchiNo1 } from "#/templates/btrBocchiNo1.tsx";
import { btrBocchiPanic1 } from "#/templates/btrBocchiPanic1.tsx";
import { btrBocchiPanic2 } from "#/templates/btrBocchiPanic2.tsx";
import { adOsakaNerd1 } from "#/templates/adOsakaNerd1.tsx";
import { adTomoAndOsakaStaring1 } from "#/templates/adTomoAndOsakaStaring1.tsx";
import { adTomoBoasting2 } from "#/templates/adTomoBoasting2.tsx";
import { btrBocchiPanic3 } from "#/templates/btrBocchiPanic3.tsx";
import { btrBocchiPanic4 } from "#/templates/btrBocchiPanic4.tsx";
import { reactionDouble } from "#/templates/reactionDouble.tsx";
import { reactionTriple } from "#/templates/reactionTriple.tsx";
import { reactionQuadruple } from "#/templates/reactionQuadruple.tsx";
import { adChiyoShockedVsCrying } from "#/templates/adChiyoShockedVsCrying.tsx";
import { adKaguraPanicStages } from "#/templates/adKaguraPanicStages.tsx";
import { btrBocchiPanicStages } from "#/templates/btrBocchiPanicStages.tsx";
import { btrBocchiPanicStages1 } from "#/templates/btrBocchiPanicStages1.tsx";
import { arobmiSistineConfusionStages } from "#/templates/arobmiSistineConfusionStages.tsx";
import { arobmiSistineConfusionStages1 } from "#/templates/arobmiSistineConfusionStages1.tsx";
import { arobmiSistineConfusionStages2 } from "#/templates/arobmiSistineConfusionStages2.tsx";
import { arobmiSistineConfusionStages3 } from "#/templates/arobmiSistineConfusionStages3.tsx";
import { blendsMaikaSmileVsSadistic } from "#/templates/blendsMaikaSmileVsSadistic.tsx";
import { btrBocchiDefeatedStages } from "#/templates/btrBocchiDefeatedStages.tsx";
import { btrBocchiIntrovertStages } from "#/templates/btrBocchiIntrovertStages.tsx";
import { btrBocchiIntrovertStages1 } from "#/templates/btrBocchiIntrovertStages1.tsx";
import { btrBocchiIntrovertStages2 } from "#/templates/btrBocchiIntrovertStages2.tsx";
import { btrBocchiIntrovertStages3 } from "#/templates/btrBocchiIntrovertStages3.tsx";

export class TemplatesRepository implements ITemplatesRepository {
    private _imageUrls: string[] | undefined;
    private _templates: Template[] | undefined;

    /**
     * Returns an array of template names that
     * all share a specific topic
     *
     * @param topic
     * @param [imageLimit]
     * @param [textLimit]
     * @returns string[]
     *
     * @author Kyrylo Maliuha
     */
    public getTemplateNamesByTopic(topic: TemplateTopic, imageLimit?: number, textLimit?: number): string[] {
        const templates: Template[] = this.getAllByField("topics", topic);

        return templates
            .filter((template: Template): boolean => {
                return !(
                    (imageLimit !== undefined && (template.images?.length ?? 0) > imageLimit) ||
                    (textLimit !== undefined && (template.texts?.length ?? 0) > textLimit)
                );
            })
            .map((template: Template): string => template.name);
    }

    /**
     * Returns an array of all template objects
     *
     * @returns Template[]
     */
    public getAll(): Template[] {
        if (this._templates) {
            return this._templates;
        }

        this._templates = [
            topBottomText,
            liveReaction,
            spongebobBurningTheNote,
            explains,
            looksAtPaperAngry,
            homerHiding,
            isThisAPigeon,
            buzz,
            cowLookingIntoOcean,
            manLookingUp,
            uncanny,
            tf2Hahaha,
            yesChad,
            quoteCenterText,
            stonks,
            stonks1,
            disappointedGuy,
            disappointedGuy1,
            disasterGirl,
            dogAndTeblet,
            missingPiece,
            newsReporterSitting,
            sleepyThinking,
            wojackPoint,
            absoluteCinema,
            bearArrest,
            awkwardLookMonkey,
            crowdFromAngryToHappy,
            diagramIQ,
            blooInBed,
            iAdopted100Dogs,
            iGotHuntedByARealBountyHunter,
            oneDollarPrivateIsland,
            spongebobHappy,
            worldsMostDangerousTrap,
            connor,
            dogeWithGlasses,
            expandingBrain,
            expandingBrain1,
            explainingWhiteboard,
            grokTweet,
            iSteppedInShit,
            lookAtThis,
            moneyTonyStark,
            monkeyThinking,
            mrMcMahonReaction,
            myHeartBlank,
            myHonestReaction,
            nerdDog,
            owlStareAtYou,
            sadMan,
            spidermanDouble,
            starTrekThinking,
            tf2ScoutTalk,
            tryingToExplain,
            willSmith,
            winnieThePooh,
            winnieThePooh1,
            womanYellingAtACat,
            iInterviewedAnimals,
            catIsCalling,
            spongebobShowsSign,
            post,
            fuckMyChudLife,
            ukGovernmentToBanPeople,
            bernieSandersLive,
            theyAllGoIntoSquareHole,
            purestCookie,
            applyingForJobsWithFunnyPfp,
            boykisserEnergy,
            creativeMetaphor,
            britishCuisine,
            soGladIGrewUpWithThis,
            bumperSticker,
            falklandWolf,
            pleaseBePatient,
            bbCooking,
            bbLetsCook,
            bbSayMyName,
            futuramaNotSureIfFry,
            futuramaShutUpAndTakeMyMoney,
            griffinsElephantAndPenguin,
            griffinsPeterGriffinRunningAway,
            griffinsPeterGriffinThinking,
            griffinsPeterWaitingForSomething,
            monaLisa,
            mrBeanWaiting,
            mrBeanWaiting1,
            pfAllToghether,
            pfCoffeeScene,
            pfConfusedTravolta,
            pfSayWhatOneMoreTime,
            pfTwoGangsterWithGuns,
            saltBae,
            sdFredUnmaskingGhost,
            simpsonsLIsaShowPresentation,
            simpsonsRalphImInDanger,
            spidermanPeterDance,
            spidermanPeterParkerWearingGlasses,
            spongebobBeggingVsTuxedo,
            dhGirlWithHandOverMouth,
            griffinsLoisInBed,
            cinemaGuys,
            incomingCall,
            spongebobSacredTextBook,
            griffinsPeterSkinColor,
            spongebobLongTodoList,
            spongebobRainbow,
            spongebobCaveman,
            spongebobMonolith,
            spongebobGrin,
            simpsonsHomerReadingBook,
            simpsonsMoeKickingOutBarney,
            simpsonsThatsAPaddlin,
            simpsonsTheWorstDayOfYourLifeSoFar,
            simpsonsHomerInLesbianBar,
            simpsonsMonkeyInHomerHead,
            simpsonsScaryNews,
            simpsonsAdultLisaAndBart,
            simpsonsMoeHoldingGunToHead,
            spongebobProud,
            simpsonsWhatIsInHomersHead,
            simpsonsWhatIsInHomersHead1,
            quoteBottomText,
            quoteTopText,
            simpsonsBartHitsHomerWithChair,
            griffinsPaddedWalls,
            griffinsPeterHurtsHisKnee,
            futuramaFryReadingLetter,
            futuramaBenderCaptcha,
            futuramaBenderScared,
            futuramaZeroDaysSinceLast,
            simpsonsLemmyThinking,
            simpsonsTwoSidesOfMrBurns,
            simpsonsWhyYouLittle,
            futuramaFrySleeplessInsomnia,
            futuramaZappBranniganAsDrake,
            futuramaBenderAsDrake,
            futuramaSkeletons,
            futuramaToasterBoo,
            spongebobHandsomeFace,
            griffinsPeterPickingADonkey,
            griffinsPeterWriteALetter,
            griffinsPeterVsChicken,
            simpsonsAtLeastYouTried,
            simpsonsLisaStaring,
            simpsonsNotMyBoyfriendShirt,
            parrotBarber,
            parrotBarber1,
            parrotBarber2,
            acNowKillHim,
            acsrMisakaMikotoDrakeMeme,
            acsrMisakaMikotoPlayingDSOnBus,
            adHowAreYouFineThankYouMeme,
            adOsakaSeriousFace,
            adOsakaStaring,
            adWhyAreYouSpeakingInEnglish,
            animeSakuraDisapprovalRikoShrug,
            animeTheThreeStagesOfApproval,
            aotErenYeagerHappyVsDepressed,
            arobmiAngrySistineFibel,
            arobmiCryingSistine,
            arobmiSistineFibelPointingFinger,
            arobmiSistineFibelTeaSip,
            arobmiSurprisedSistine,
            blendsChibiMaikaCheering,
            blendsHideriFingerTapping,
            blendsHideriHeartHands,
            blendsHideriKanzakiSmugFace,
            blendsHideriMaidUniformWink,
            blendsHideriSmugFace,
            blendsKahoAndMaikaMaids,
            blendsMaidCast,
            blendsMaikaAngryPanic,
            blendsMaikaSadisticSmile,
            blendsMaikaShockedPanic,
            blendsMaikaUhHuh,
            blendsSnoopDoggFace,
            btrBocchiAnxietyWave,
            btrBocchiAnxiousSmiling,
            btrBocchiBreakingBadWalter,
            btrBocchiDepressedCorner,
            btrBocchiDizzyPanic,
            btrBocchiExhaustedFace,
            btrBocchiGlitchPanic,
            btrBocchiHappy,
            btrBocchiLyingAwake,
            btrBocchiPaleShock,
            btrBocchiScaredScream,
            btrBocchiSoulLeavingBody,
            btrBocchiSpiralEyesPanic,
            btrBocchiMeltdownFace,
            ceDavidTraumatizedFace,
            ceLucyCryingDavidChad,
            ceLucyHacking,
            ceLucyLaughingVsCold,
            ceRebeccaCalmVsAngry,
            ceRebeccaDrake,
            ceRebeccaSquidward,
            dandadanShockedTurboGranny,
            dandadanTurboGrannyCatSquintedEyes,
            dandadanTurboGrannyCatSquintedEyes1,
            dfragRokaShibasakiDisguise,
            dfragRokaShibasaki,
            ceRebeccaDisgusted,
            ditfZeroTwoHeh,
            ditfZeroTwoWhatever,
            ditfZeroTwoWhatever1,
            ditfTheTwoSidesOfZeroTwo,
            ceLucyHacking1,
            wnlFuminoRealization1,
            ditfZeroTwoHuggingPaper,
            dnDarkRoomThinking,
            dnLSmile,
            dnLSmirkFinger,
            dnLStaring,
            dnLTwoFaces,
            dsFreeHugsVsDeluxeHugs,
            dsGenyaHospitalBed,
            dsGiyuTomiokaDeadpan,
            dsNezukoIsBeautiful,
            dsTanjiroChibiAngry,
            dsTanjiroHappyChibi,
            dsTanjiroLookingAtPhone,
            dsTanjiroSumiko,
            evangelionAsukaLangleyDisappointedLook,
            evangelionShinjiCalmVsPanic,
            evangelionShinjiIkariChairDepression,
            evangelionShinjiIkariListeningToMusic,
            evangelionShinjiIkariMentalBreakdown,
            evangelionShinjiIkariPanicAttack,
            evangelionShinjiSeriousFace,
            frierenBlowingKiss,
            frierenBlowingKissChuu,
            frierenBlowingKissToFlamme,
            frierenFlammeShowingSerieDrawing,
            frierenInspiration,
            frierenLiftedUp,
            frierenExpectationVsReality,
            frierenSmugVsDark,
            frierenSittingAndSmiling,
            frierenSmilingCrying,
            frierenSmugCatFaceCloseUp,
            frierenSmugPotion,
            gdoSataniaCrying,
            gdoSataniaDeathNote,
            gdoSataniaDisappointed,
            gdoSataniaShocked,
            gdoSataniaLaugh,
            gdoSataniaThumbsUp,
            gintamaGintokiCreepyFace,
            gintamaGintokiDarkFace,
            gintamaGintokiDrinkingBeer,
            gintamaGintokiManiacLaugh,
            gintamaGintokiNosePickThumbsUp,
            gintamaGintokiPointingUp,
            gintamaGintokiRealizationStages,
            gintamaGintokiScaredGhost,
            gintamaGintokiSmirk,
            gintamaGintokiSurprisedFace,
            gintamaGintokiUnderstood,
            gintamaGintokiRealizationStages1,
            hucSylphynfordTachibanaWithAGun,
            hucUmaruHamsterHoodie,
            hucUmaruSmugFace,
            hucUmaruSunglassesSmug,
            hucUmaruWhiningCry,
            jkHigurumaCoveringFaceStare,
            jkHigurumaCoveringFaceStare1,
            jkKidMegumiSeriouslyBro,
            jkRizzSukuna,
            jkSatoruGojoNahIdWin,
            jkSatoruGojoNahIdWin1,
            jkSatoruGojoNahIdWin2,
            kaguyasamaBakaguya,
            kaguyasamaChikaFujiwaraFadingSmile,
            kaguyasamaChikaFujiwaraHappyVsShocked,
            kaguyasamaKaguyaDroppingPhone,
            kaguyasamaKaguyaDroppingPhone1,
            konAzusaNoThanks,
            konAzusaNoThanks1,
            konosubaAquaBarnShock,
            konosubaAquaCryingFace,
            konosubaAquaPanic,
            konosubaAquaNervousSmug,
            lhShiroeBigBrain,
            lightVsDark,
            lsWindowsXPWallpaper,
            mhaDekuAllMightFace,
            monsterKenzoTenmaBeforeAfter,
            noragamiYatoNoragamiMoneyFloor,
            noragamiYatoNoragamiMoneyFloor1,
            rtnobgsMaiSakurajimaPhoneReaction,
            selLainStare,
            selLainFunnyILaugh,
            selLainImFineScreen,
            sfAnyaForgerDisgustFace,
            sfAnyaForgerSmugShush,
            sfAnyaStudyingHard,
            sgPlayer456HappyVsDepressed,
            shirobakoWorkStress,
            shirobakoWorkStress1,
            shirobakoWorkStress2,
            shirobakoWorkStress3,
            tbobsJamesFrancoFirstTime,
            thisPersonIs100kmNearYourHouse,
            toradoraCriticalHit,
            toradoraMinoriAndTaigaCryingSalute,
            toradoraMinoriHoldingDocument,
            toradoraMinoriHoldingDocument1,
            toradoraMinoriTwoMoods,
            toradoraTaigaAndAmiChibiAnimalEars,
            toradoraTaigaCatchesRyuujiAndAmi,
            toradoraTaigaChristmasDonut,
            toradoraTaigaCreepySmile,
            toradoraTaigaHoldingHead,
            toradoraTaigaHoldingLeek,
            toradoraTaigaHoldingLeek1,
            toradoraTaigaMorningMisanthropeDemotivator,
            toradoraTaigaStartled,
            toradoraTaigaWideGrin,
            tqqNinoAndMikuLookingAtYou,
            tqqNinoNakanoHappyVsSad,
            ucwthoTsukiUzakiWhatAreYouSaying,
            wnlFuminoRealization,
            wnlFuminoRealization2,
            wnlFuminoRealization3,
            wnlMafuyuKirisuIntrovert,
            wnlMafuyuKirisuMenacing,
            snkNekoNekoyamadaCuteSleeves,
            ditfZeroTwoHuggingPaper1,
            blendsMafuyuHoshikawaSparkle,
            acNagisaCalm,
            acNagisaNotes,
            acsrMisakaAtack,
            acsrMisakaRailgun,
            adChiyoAngryCrying,
            adChiyoChangingPigtails,
            adChiyoPanic,
            adChiyoShocked,
            adKaguraLaughing,
            adKaguraPanic,
            adOsakaPool,
            adOsakaStudying,
            adOsakaWithSoap,
            adTomoAndOsakaAgree,
            adTomoBoasting,
            arobmiSistineAndRumiaShocked,
            acNagisaNotes1,
            arobmiSistineBlush,
            arobmiSistineBlush1,
            arobmiSistineConfused,
            arobmiSistineShocked,
            blendsHideriKanzakiSmugFace1,
            blendsKahoFlustered,
            blendsMaikaAngryPanic1,
            blendsMaikaBlush,
            blendsMaikaInnocent,
            blendsMaikaNo,
            blendsMafuyuPlusEyes,
            blendsMaikaSadisticEyes,
            blendsMaikaWithCat,
            btrBocchiCrying,
            btrBocchiDefeated,
            btrBocchiDizzy,
            btrBocchiExcited,
            btrBocchiExplosion,
            btrBocchiGlitch,
            btrBocchiHeartAttack,
            btrBocchiHiding,
            btrBocchiNo,
            btrBocchiPanic,
            btrBocchiPerform,
            btrBocchiSpiralEyesPanic1,
            btrNijikaGoodbye,
            umAgnesTachyonUncanny,
            dandadanJijiPoint,
            dandadanMomoSmug,
            dandadanOkarunAura,
            dandadanOkarunWriting,
            dandadanTurboGrannyDance,
            dandadanTurboGrannyHearingMusic,
            dfragRokaDarkness,
            ditfZeroTwoCrying,
            ditfZeroTwoSmile,
            dnNearListening,
            dnNearShocked,
            frierenCold,
            frierenCrying,
            frierenFernFrustratedFrom67,
            frierenFernFrustratedFrom671,
            frierenLightning,
            frierenWarming,
            gdoGabrielCozy,
            gdoGabrielEating,
            gdoRaphielAraAra,
            gdoRaphielSmile,
            gdoSataniaAngryCrying,
            gdoSataniaEvilSmart,
            gdoSataniaEvilSmart1,
            gdoSataniaLaughing,
            gdoSataniaLaughing1,
            gdoSataniaThumbsUp1,
            gdoTapiocaPoint,
            officeDwightScreaming,
            officeKevinICant,
            officeMichaelCringe,
            officeMichaelExcited,
            officeMichaelParkour,
            officeStanleyBlinking,
            robotVacuumArtist,
            spongebobAlone,
            spongebobBreathing,
            spongebobExam,
            spongebobFingerGuns,
            spongebobGrimace,
            tf2PyroOnFire,
            tf2PyroOnFire1,
            tf2WhatIsLove,
            toradoraTaigaAngryCrying,
            tsAngryKenClapping,
            tsAngryKenClapping1,
            tsWoodyCrazy,
            tsWoodyStare,
            wnlFuminoSoulLeaving,
            userDemotivator,
            eightySixHenriettaAngry,
            barakamonNaruSlap,
            gintamaGintokiChocolate,
            gintamaGintokiCool,
            gintamaGintokiDisgusted,
            gintamaGintokiMocking,
            gintamaGintokiSeriousAndGoofy,
            gintamaGintokiSeriousAura,
            gintamaGintokiShocked,
            gintamaGintokiSpillingDrink,
            gintamaKaguraAnnoyed,
            gintamaKaguraSike,
            gintamaGintokiGintokiRippingShirt,
            gjbuKasumiBites,
            gtoOnizukaCrying,
            gtoOnizukaEating,
            gtoOnizukaSmiling,
            gtoOnizukaWalkingWithSpray,
            hucUmaruAngryPout,
            hucUmaruCoolSunglasses,
            hucUmaruCryingLoudly,
            hucUmaruEvilSmirk,
            hucUmaruExcited,
            hucUmaruFactory,
            hucUmaruGamingAndSliding,
            hucUmaruHeadpat,
            hucUmaruInterruptedDuringGaming,
            hucUmaruLightSwitch,
            hucUmaruMaracasDance,
            hucUmaruPlayingDS,
            hucUmaruPouting,
            hucUmaruRagingFire,
            hucUmaruRunningCrying,
            hucUmaruSleeping,
            hucUmaruSliding,
            hucUmaruStarEyes,
            hucUmaruTantrum,
            hucUmaruTearingUp,
            hucUmaruTransformation,
            jetCrash,
            missleAtack,
            policeCarCrash,
            jkHigurumaCoveringFace,
            jkSukunaDomainExpansion,
            jkSukunaSmirking,
            jkSukunaTransformation,
            kaguyaKaguyaAngry,
            kaguyasamaChikaDancing,
            kaguyasamaChikaDetectiveSmile,
            kaguyasamaChikaExcited,
            kaguyasamaChikaGiggling,
            kaguyasamaChikaHappy,
            kaguyasamaChikaHeartEyes,
            kaguyasamaChikaHittingIshigami,
            kaguyasamaChikaHorrified,
            kaguyasamaChikaPouting,
            kaguyasamaHayasakaShy,
            kaguyasamaHayasakaUnimpressed,
            kaguyasamaKaguyaCatEars,
            kaguyasamaKaguyaCryingPout,
            kaguyasamaKaguyaExcided,
            kaguyasamaKaguyaHappy,
            kaguyasamaKaguyaIntenseBlush,
            kaguyasamaKaguyaLaughing,
            kaguyasamaKaguyaNervousTea,
            kaguyasamaKaguyaPanicking,
            kaguyasamaKaguyaRomantic,
            kaguyasamaMikoPointingAngry,
            kaguyasamaShiroganeNervous,
            kaguyasamaShiroganeScared,
            konMugiExcited,
            konMugiPointing,
            konosubaAquaBegging,
            konosubaAquaCrying,
            konosubaAquaCrying1,
            konosubaAquaCryingSmilingFace,
            konosubaAquaEatingGround,
            konosubaAquaCondescending,
            konosubaAquaPanicking,
            konosubaAquaPleading,
            konosubaAquaShadowSmirk,
            konosubaAquaSmug,
            konosubaAquaTantrum,
            konosubaAquaThinking,
            konosubaDarknessHappy,
            konosubaDarknessSwingingSword,
            konosubaKazumaSaluting,
            konosubaMeguminApproves,
            konosubaMeguminCryingSmilingFace,
            konosubaMeguminHuggingStaff,
            konosubaMeguminIntroducingHerself,
            konosubaMeguminSmiling,
            konosubaMeguminSmug,
            gtoUrumiPhoneCall,
            konYuiCryingWindow,
            konYuiDoublePeace,
            konYuiHappySmile,
            lhAkatsukiBlush,
            lhAkatsukiRolling,
            lhShiroeGlassesPush,
            lhShiroeNervous,
            lhShiroeScheming,
            llMakiHappy,
            lsKonataApologizing,
            lsKonataHi,
            lsKonataCantConcentrate,
            lsKonataDancing,
            lsKonataGaming,
            lsKonataGamingSmug,
            lsKonataHappy,
            lsKonataNerd,
            lsKonataPhonePanic,
            lsKonataReadingManga,
            lsKonataSneezing,
            lsKonataTryingToExplaing,
            lsKonataTryingToExplaing1,
            lsKonataWaitingForRamen,
            lsKonataWaitingForRamen1,
            lsKonataYawning,
            lsMiyukiAndTsukasa,
            lsTsukasaBitingPhone,
            lsTsukasaSleeping,
            mhaBabyDekuExcited,
            mhaBakugoGrinning,
            mhaDekuAllMightFace1,
            mhaDekuAndEriDetermined,
            mhaDekuLunging,
            mhaDekuPunching,
            mhaDekuWinningRace,
            mhaEriExcited,
            mhaTodorokiSmiling,
            monsterJohanAndTenmaStaring,
            monsterTenmaEating,
            nichijouHakaseDrinkingMilk,
            nichijouHakaseLaughingHearts,
            nichijouHakasePanicking,
            nichijouHakaseShocked,
            nichijouHakaseShocked1,
            nichijouHakaseSparkling,
            nichijouMioDetermined,
            nichijouMioDetermined1,
            nichijouMioRunningDesperately,
            nichijouSakamotoHeldUp,
            nichijouSakamotoMesmerized,
            nichijouSakamotoStruggling,
            nichijouYuukoMioHandshake,
            noragamiHiyoriLooking,
            noragamiHiyoriShockedBlush,
            noragamiKofukuShocked,
            noragamiKofukuSmiling,
            noragamiYatoGodOfCalamity,
            noragamiYatoShocked,
            noragamiYatoSmiling,
            noragamiYukineBlushingGeek,
            noragamiYatoHeartbroken,
            noragamiYatoHeartbroken1,
            noragamiYatoSmile,
            opmSaitamaEatingSonicsSword,
            opmSaitamaHeroForm,
            opmSaitamaPunch,
            opmSaitamaRunning,
            opmSaitamaSleeping,
            opmSaitamasPunch,
            opmSaitamaUnbothered,
            rtnobgsFutabaAnnoyed,
            rtnobgsFutabaDisappointed,
            rtnobgsKaedeSmiling,
            rtnobgsKaedeThinking,
            rtnobgsMaiBlush,
            rtnobgsMaiFingerGun,
            rtnobgsMaiJudging,
            rtnobgsMaiJudging1,
            rtnobgsMaiPointing,
            rtnobgsMaiSakurajimaApproves,
            rtnobgsMaiSakurajimaTurnsAndApproves,
            selLainBlankStare,
            selLainClown,
            selLainHologram,
            selLainStaring,
            selLainStaring1,
            sfAnyaCrossingArms,
            sfAnyaCrossingArms1,
            sfAnyaDarkSmirk,
            sfAnyaDesperateGrip,
            sfAnyaExcitedPrincess,
            sfAnyaPaleShock,
            sfAnyaShocked,
            sfAnyaSobbingOnCouch,
            sfAnyaStarEyes,
            sfAnyaTearingUp,
            sfLoidOnGuard,
            sfLoidSighing,
            sfYorAngry,
            sgGiHunSmiling,
            sgPlayersCelebrating,
            shirobakoAoiAirQuotes,
            shirobakoAoiBlankStare,
            shirobakoAoiBlush,
            shirobakoAoiDetermined,
            shirobakoAoiDizzy,
            shirobakoAoiExhausted,
            shirobakoAoiPanicking,
            shirobakoAoiStressedPhoneCall,
            shirobakoEmaSmiling,
            shirobakoEmaYasuharaBlush,
            shirobakoYanoTalking,
            snkNokoNosePick,
            snkNokoShikanokoDeerArmy,
            snkNokoShikanokoDeerArmy1,
            snkNokotanEmptyHead,
            tqqIchikaHappy,
            tqqItsukiBlushing,
            tqqItsukiDizzy,
            tqqItsukiShocked,
            tqqItsukiSmiling,
            tqqMikuBlush,
            tqqMikuPoutingBlueAura,
            tqqMikuPoutingOnFire,
            tqqMikuSmiling,
            tqqNinoCrying,
            tqqNinoMenacingSmile,
            tqqNinoShopping,
            tqqNinoTense,
            tqqYotsubaEatingCake,
            tqqYotsubaFlustered,
            tqqYotsubaPanicking,
            tqqYotsubaSurprisedBlush,
            tqqYotsubaWinter,
            ucwthoUzakiHanaSmug,
            ucwthoUzakiHanaSmugLaugh,
            ucwthoUzakiLaughing,
            ucwthoUzakiLaughs,
            ucwthoUzakiOrdersEverything,
            ucwthoUzakiTryingToExplain,
            ucwthoUzakiYelling,
            umAgnesTachyonSmile,
            umSpecialWeekSprinting,
            umTokaiTeioShocked,
            umDaiwaAndVodkaCheekPinch,
            umSpecialWeekRunningWithCarrot,
            umOguriCapSweating,
            umSpecialWeekSurprised,
            umTMOperaOLaughing,
            acNagisaNotes2,
            acNagisaSmile,
            acsrMisakaAngry,
            acsrMisakaAngry1,
            adChiyoAngryCrying1,
            adChiyoCrying,
            adChiyoPanic1,
            adChiyoShocked1,
            adKaguraLaughing1,
            adKaguraPanic1,
            adKaguraPanic2,
            adKaguraPanic3,
            adKaguraPanic4,
            adOsakaNerd,
            adOsakaNerd1,
            adOsakaPool1,
            adOsakaZonedOut,
            adTomoAndOsakaStaring,
            adTomoAndOsakaStaring1,
            adTomoBoasting1,
            adTomoBoasting2,
            arobmiSistineAndRumiaShocked1,
            arobmiSistineBlush2,
            arobmiSistineShocked1,
            arobmiSistineConfused1,
            arobmiSistineNeutral,
            arobmiSistineUtterlyConfused,
            barakamonNaruSlapHuh,
            blendsKahoFlustered1,
            blendsMaikaBlush1,
            blendsMafuyuPlusEyes1,
            blendsMaikaSadisticSmile1,
            blendsMaikaSmile,
            btrBocchiDefeated1,
            btrBocchiDefeated2,
            btrBocchiDoubtful,
            btrBocchiExcited1,
            btrBocchiHiding1,
            btrBocchiNeutral,
            btrBocchiNo1,
            btrBocchiPanic1,
            btrBocchiPanic2,
            btrBocchiPanic3,
            btrBocchiPanic4,
            reactionDouble,
            reactionTriple,
            reactionQuadruple,
            adChiyoShockedVsCrying,
            adKaguraPanicStages,
            btrBocchiPanicStages,
            btrBocchiPanicStages1,
            arobmiSistineConfusionStages,
            arobmiSistineConfusionStages1,
            arobmiSistineConfusionStages2,
            arobmiSistineConfusionStages3,
            blendsMaikaSmileVsSadistic,
            btrBocchiDefeatedStages,
            btrBocchiIntrovertStages,
            btrBocchiIntrovertStages1,
            btrBocchiIntrovertStages2,
            btrBocchiIntrovertStages3,
        ];

        return this._templates;
    }

    /**
     * Goes through meme templates and finds
     * all used images inside src attributes
     *
     * @returns string[]
     *
     * @author Kyrylo Maliuha
     */
    public getAllImageUrls(): string[] {
        if (this._imageUrls) return this._imageUrls;

        const directory: string = join(dirname(fileURLToPath(import.meta.url)), "../templates");
        const urls = new Set<string>();

        for (const file of readdirSync(directory)) {
            if (!file.endsWith(".tsx")) continue;

            const source: string = readFileSync(join(directory, file), "utf8");
            for (const [, url] of source.matchAll(/src="(https?:\/\/[^"]+)"/g)) {
                urls.add(url!);
            }
        }

        this._imageUrls = [...urls];
        return this._imageUrls;
    }

    /**
     * Puts all localizations into an array of strings
     * and returns it
     *
     * @param map
     * @private
     *
     * @authors Kyrylo Maliuha & Oleksii Sych
     */
    private _getLocalizedValues(map: LocalizationMap): string[] {
        return Object.values(map).filter((value): value is string => value !== null && value !== undefined);
    }

    /**
     * Checks if a lowercased value includes searched string
     *
     * @param value
     * @param search
     * @private
     *
     * @authors Kyrylo Maliuha & Oleksii Sych
     */
    private _matchesValue(value: string, search: string): boolean {
        return value.toLowerCase().includes(search);
    }

    /**
     * Checks if a template has searched name
     *
     * @param template
     * @param search
     * @private
     *
     * @authors Kyrylo Maliuha & Oleksii Sych
     */
    private _matchesName(template: Template, search: string): boolean {
        return this._matchesValue(template.name, search);
    }

    /**
     * Checks if a template has searched display name
     *
     * @param template
     * @param search
     * @private
     *
     * @authors Kyrylo Maliuha & Oleksii Sych
     */
    private _matchesDisplayName(template: Template, search: string): boolean {
        return this._getLocalizedValues(template.displayName).some((localizedName: string): boolean =>
            this._matchesValue(localizedName, search),
        );
    }

    /**
     * Checks if a template has searched topic
     *
     * @param template
     * @param search
     * @private
     *
     * @authors Kyrylo Maliuha & Oleksii Sych
     */
    private _matchesTopics(template: Template, search: string): boolean {
        return template.topics.some((topic: TemplateTopic): boolean =>
            this._getLocalizedValues(TopicLocalizationMap[topic]).some((localizedTopic: string): boolean =>
                this._matchesValue(localizedTopic, search),
            ),
        );
    }

    /**
     * Returns all matching templates by name, display name and topics
     *
     * @param query
     *
     * @authors Kyrylo Maliuha & Oleksii Sych
     */
    public findTemplates(query: string): Template[] {
        const search: string = query.toLowerCase();
        return this.getAll().filter(
            (template: Template): boolean =>
                this._matchesName(template, search) ||
                this._matchesDisplayName(template, search) ||
                this._matchesTopics(template, search),
        );
    }

    /**
     * Groups an array of templates into a Map based on the value of a specified field.
     * If the field value is an array, the template will be mapped to each individual element inside that array.
     *
     * @template K - The key of the Template object used for grouping.
     * @param templates - The array of templates to be processed and grouped.
     * @param fieldName - The field name to group the templates by.
     * @returns A Map where keys are the field values (or array elements) and values are arrays of templates matching that key.
     *
     * @author Oleksii Sych
     */
    public getAllByFieldMap<K extends keyof Template>(
        templates: Template[],
        fieldName: K,
    ): Map<TemplateMapKey<Template, K>, Template[]> {
        type Key = TemplateMapKey<Template, K>;

        const map: Map<Key, Template[]> = new Map();

        const addToMap = (template: Template, key: Key): void => {
            const bucket: Template[] | undefined = map.get(key);

            if (bucket) {
                bucket.push(template);
            } else {
                map.set(key, [template]);
            }
        };

        for (const template of templates) {
            const value: Template[K] = template[fieldName];

            if (Array.isArray(value)) {
                for (const element of value as Key[]) {
                    addToMap(template, element);
                }
            } else if (value !== undefined && value !== null) {
                addToMap(template, value as Key);
            }
        }

        return map;
    }

    /**
     * Returns an array of templates filtered by a specific field value
     *
     * @param fieldName - The key of the Template object to filter by
     * @param value - The expected value (or element within an array field) to match
     * @returns An array of filtered Template objects
     *
     * @author Oleksii Sych
     */
    public getAllByField<K extends keyof Template>(fieldName: K, value: TemplateMapKey<Template, K>): Template[] {
        return this.getAll().filter((template: Template): boolean => {
            const fieldValue: Template[K] = template[fieldName];

            if (Array.isArray(fieldValue)) {
                return (fieldValue as (typeof value)[]).includes(value);
            }

            return fieldValue === value;
        });
    }
}
