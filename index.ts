import { day1Input, inverseCaptchaHalf, inverseCaptchaSum } from './days/day1';
import { day10Input, day10TestInput, generateStructure, knotHash, knotHashSimple } from './days/day10';
import { day11Input, hexSteps } from './days/day11';
import { connectionsCount, connectionsGroups, day12Input, day12TestInput } from './days/day12';
import { day13Input, day13TestInput, firewallDelay, firewallSeverity } from './days/day13';
import { diskUsage } from './days/day14';
import { judge } from './days/day15';
import { day16Input, day16Programs, day16TestInput, day16TestPrograms, promenade } from './days/day16';
import { neighbor0, spinlock } from './days/day17';
import { day18Input, day18TestInput, duet, duetWithDocumentation } from './days/day18';
import { day19Input, day19TestInput, tube } from './days/day19';
import { checkSumDivision, checkSumMaxMin, day2Input, day2TestInput1, day2TestInput2 } from './days/day2';
import { day3Input, manhattanDistance, manhattanValue } from './days/day3';
import { day4Input, isPassPhraseValid, passPhrase } from './days/day4';
import { day5Input, mazeSteps, mazeStepsStranger } from './days/day5';
import { day6Input, memoryReallocation } from './days/day6';
import { day7Input, day7TestInput, findRootProgram, findWeight } from './days/day7';
import { day8Input, day8TestInput, findLargest, findLargestEver } from './days/day8';
import { day9Input, streamScore } from './days/day9';

// DAY 1: Inverse Captcha
console.assert(inverseCaptchaSum('1122') === 3, 'inverseCaptchaSum(1122) NOK');
console.assert(inverseCaptchaSum('1111') === 4, 'inverseCaptchaSum(1111) NOK');
console.assert(inverseCaptchaSum('1324') === 0, 'inverseCaptchaSum(1324) NOK');
console.assert(inverseCaptchaSum('91212129') === 9, 'inverseCaptchaSum(91212129) NOK');
console.info('Day 1-1:', inverseCaptchaSum(day1Input));
console.assert(inverseCaptchaHalf('1212') === 6, 'inverseCaptchaHalf(1212) NOK');
console.assert(inverseCaptchaHalf('1221') === 0, 'inverseCaptchaHalf(1221) NOK');
console.assert(inverseCaptchaHalf('123425') === 4, 'inverseCaptchaHalf(123425) NOK');
console.assert(inverseCaptchaHalf('123123') === 12, 'inverseCaptchaHalf(123123) NOK');
console.assert(inverseCaptchaHalf('12131415') === 4, 'inverseCaptchaHalf(12131415) NOK');
console.info('Day 1-2:', inverseCaptchaHalf(day1Input));

// DAY 2: Corruption Checksum
console.assert(checkSumMaxMin(day2TestInput1) === 18, 'checkSumMaxMin(day2TestInput1): NOK');
console.info('Day 2-1:', checkSumMaxMin(day2Input));
console.assert(checkSumDivision(day2TestInput2) === 9, 'checkSumDivision(day2TestInput2): NOK');
console.info('Day 2-2:', checkSumDivision(day2Input));

// DAY 3: Spiral Memory
console.assert(manhattanDistance(1) === 0, 'manhattanDistance(1): NOK');
console.assert(manhattanDistance(12) === 3, 'manhattanDistance(12): NOK');
console.assert(manhattanDistance(23) === 2, 'manhattanDistance(23): NOK');
console.assert(manhattanDistance(1024) === 31, 'manhattanDistance(1024): NOK');
console.info('Day 3-1:', manhattanDistance(day3Input));
console.assert(manhattanValue(747) === 806, 'manhattanValue(747): NOK');
console.info('Day 3-2:', manhattanValue(day3Input));

// DAY 4: High-Entropy Passphrases
console.assert(isPassPhraseValid('aa bb cc dd ee'), 'isPassPhraseValid(aa bb cc dd ee) NOK');
console.assert(isPassPhraseValid('aa bb cc dd aa') === false, 'isPassPhraseValid(aa bb cc dd aa) NOK');
console.assert(isPassPhraseValid('aa bb cc dd aaa'), 'isPassPhraseValid(aa bb cc dd aaa) NOK');
console.info('Day 4-1:', passPhrase(day4Input));
console.assert(isPassPhraseValid('abcde fghij', true), 'isPassPhraseValid(abcde fghij) NOK');
console.assert(isPassPhraseValid('abcde xyz ecdab', true) === false, 'isPassPhraseValid(abcde xyz ecdab) NOK');
console.assert(isPassPhraseValid('a ab abc abd abf abj', true), 'isPassPhraseValid(a ab abc abd abf abj) NOK');
console.assert(isPassPhraseValid('iiii oiii ooii oooi oooo', true), 'isPassPhraseValid(iiii oiii ooii oooi oooo) NOK');
console.assert(isPassPhraseValid('oiii ioii iioi iiio', true) === false, 'isPassPhraseValid(a ab abc abd abf abj) NOK');
console.info('Day 4-2:', passPhrase(day4Input, true));

// DAY 5: A Maze of Twisty Trampolines, All Alike
console.assert(mazeSteps([0, 3, 0, 1, -3]) === 5, 'mazeSteps([0, 3, 0, 1, -3]) NOK');
console.info('Day 5-1:', mazeSteps(day5Input));
console.assert(mazeStepsStranger([0, 3, 0, 1, -3]) === 10, 'mazeStepsStranger([0, 3, 0, 1, -3]) NOK');
// OK that's really strange this outputs 49 but this is not the good answer
// although input after test is [2 3 2 3 -1] as asked
console.info('Day 5-2:', mazeStepsStranger(day5Input));

// DAY 6: Memory Reallocation
console.assert(memoryReallocation([0, 2, 7, 0]).allocations === 5, 'memoryReallocation([0, 2, 7, 0]).allocations NOK');
console.info('Day 6-1:', memoryReallocation(day6Input).allocations);
console.assert(memoryReallocation([0, 2, 7, 0]).size === 4, 'memoryReallocation([0, 2, 7, 0]).size NOK');
console.info('Day 6-2:', memoryReallocation(day6Input).size);

// DAY 7: Recursive Circus
console.assert(findRootProgram(day7TestInput) === 'tknk', 'findRootProgram(day7TestInput) NOK');
console.info('Day 7-1:', findRootProgram(day7Input));
console.assert(findWeight(day7TestInput) === 60, 'findWeight(day7TestInput) NOK');
// OK that's really strange this outputs 922 but this is not the good answer
// I tried to sort input different manners but still having more than 1 overweighted program...
console.info('Day 7-2:', findWeight(day7Input));

// DAY 8: I Heard You Like Registers
console.assert(findLargest(day8TestInput) === 1, 'findLargest(day8TestInput) NOK');
console.info('Day 8-1:', findLargest(day8Input));
console.assert(findLargestEver(day8TestInput) === 10, 'findLargestEver(day8TestInput) NOK');
console.info('Day 8-2:', findLargestEver(day8Input));

// DAY 9: Stream Processing
console.assert(streamScore('{}').score === 1, 'streamScore(\'{}\').score NOK');
console.assert(streamScore('{{{}}}').score === 6, 'streamScore(\'{{{}}}\').score NOK');
console.assert(streamScore('{{},{}}').score === 5, 'streamScore(\'{{},{}}\').score NOK');
console.assert(streamScore('{{{},{},{{}}}}').score === 16, 'streamScore(\'{{{},{},{{}}}}\').score NOK');
console.assert(streamScore('{<a>,<a>,<a>,<a>}').score === 1, 'streamScore(\'{<a>,<a>,<a>,<a>}\').score NOK');
console.assert(
  streamScore('{{<ab>},{<ab>},{<ab>},{<ab>}}').score === 9,
  'streamScore(\'{{<ab>},{<ab>},{<ab>},{<ab>}}\').score NOK');
console.assert(
  streamScore('{{<!!>},{<!!>},{<!!>},{<!!>}}').score === 9,
  'streamScore(\'{{<!!>},{<!!>},{<!!>},{<!!>}}\').score NOK');
console.assert(
  streamScore('{{<a!>},{<a!>},{<a!>},{<ab>}}').score === 3,
  'streamScore(\'{{<a!>},{<a!>},{<a!>},{<ab>}}\').score NOK');
console.info('Day 9-1:', streamScore(day9Input).score);
console.assert(streamScore('<>').garbage === 0, 'streamScore(\'<>\').garbage NOK');
console.assert(streamScore('<random characters>').garbage === 17, 'streamScore(\'<random characters>\').garbage NOK');
console.assert(streamScore('<<<<>').garbage === 3, 'streamScore(\'<<<<>\').garbage NOK');
console.assert(streamScore('<{!>}>').garbage === 2, 'streamScore(\'<{!>}>\').garbage NOK');
console.assert(streamScore('<!!>').garbage === 0, 'streamScore(\'<!!>\').garbage NOK');
console.assert(streamScore('<!!!>>').garbage === 0, 'streamScore(\'<!!!>>\').garbage NOK');
console.assert(streamScore('<{o\'i!a,<{i<a>').garbage === 10, 'streamScore(\'{o\'i!a,<{i<a>\').garbage NOK');
console.info('Day 9-2:', streamScore(day9Input).garbage);

// DAY 10: Knot Hash
console.assert(
  knotHashSimple(generateStructure(5), day10TestInput) === 12,
  'knotHashSimple(day10TestStructure, day10TestInput) NOK');
console.info('Day 10-1', knotHashSimple(generateStructure(256), day10Input));
console.assert(
  knotHash(generateStructure(256), '') === 'a2582a3a0e66e6e86e3812dcb672a272',
  'knotHash(generateStructure(256), \'\') NOK');
console.assert(
  knotHash(generateStructure(256), 'AoC 2017') === '33efeb34ea91902bb2f59c9920caa6cd',
  'knotHash(generateStructure(256), \'AoC 2017\') NOK');
console.assert(
  knotHash(generateStructure(256), '1,2,3') === '3efbe78a8d82f29979031a4aa0b16a9d',
  'knotHash(generateStructure(256), \'1,2,3\') NOK');
console.assert(
  knotHash(generateStructure(256), '1,2,4') === '63960835bcdc130f0b66d7ff4f6a5a8e',
  'knotHash(generateStructure(256), \'1,2,4\') NOK');
console.info('Day 10-2', knotHash(generateStructure(256), day10Input.join()));

// DAY 11: Hex Ed
console.assert(hexSteps('ne,ne,ne').length === 3, 'hexSteps(\'ne,ne,ne\').length NOK');
console.assert(hexSteps('ne,ne,sw,sw').length === 0, 'hexSteps(\'ne,ne,sw,sw\').length NOK');
console.assert(hexSteps('ne,ne,s,s').length === 2, 'hexSteps(\'ne,ne,s,s\').length NOK');
console.assert(hexSteps('se,sw,se,sw,sw').length === 3, 'hexSteps(\'se,sw,se,sw,sw\').length NOK');
console.info('Day 11-1', hexSteps(day11Input).length);
console.assert(hexSteps('ne,ne,ne').furthest === 3, 'hexSteps(\'ne,ne,ne\').furthest NOK');
console.assert(hexSteps('ne,ne,sw,sw').furthest === 2, 'hexSteps(\'ne,ne,sw,sw\').furthest NOK');
console.assert(hexSteps('ne,ne,s,s').furthest === 2, 'hexSteps(\'ne,ne,s,s\').furthest NOK');
console.assert(hexSteps('se,sw,se,sw,sw').furthest === 3, 'hexSteps(\'se,sw,se,sw,sw\').furthest NOK');
console.info('Day 11-2', hexSteps(day11Input).furthest);

// DAY 12: Digital Plumber
console.assert(connectionsCount(day12TestInput) === 6, 'connectionsCount(day12TestInput) NOK');
console.info('Day 12-1', connectionsCount(day12Input));
console.assert(connectionsGroups(day12TestInput) === 2, 'connectionsGroups(day12TestInput) NOK');
console.info('Day 12-2', connectionsGroups(day12Input));

// DAY 13: Packet Scanners
console.assert(firewallSeverity(day13TestInput) === 24, 'firewallSeverity(day13TestInput) NOK');
console.info('Day 13-1', firewallSeverity(day13Input));
console.assert(firewallDelay(day13TestInput) === 10, 'firewallDelay(day13TestInput) NOK');
// Well this outputs 3966414 but I think my algorithm should be optimized :-)
// console.info('Day 13-2', firewallDelay(day13Input));

// DAY 14: Disk Defragmentation
console.assert(diskUsage('flqrgnkx').used === 8108, 'diskUsage(\'flqrgnkx\').used NOK');
console.info('Day 14-1', diskUsage('ljoxqyyw').used);
console.assert(diskUsage('flqrgnkx').zones === 1242, 'diskUsage(\'flqrgnkx\').zones NOK');
console.info('Day 14-2', diskUsage('ljoxqyyw').zones);

// DAY 15: Dueling Generators
console.assert(judge(65, 8921) === 588, 'judge(65, 8921) NOK');
console.info('Day 15-1', judge(591, 393));
console.assert(judge(65, 8921, 4, 8, 5000000) === 309, 'judge(65, 8921, 4, 8, 5000000) NOK');
console.info('Day 15-2', judge(591, 393, 4, 8, 5000000));

// DAY 16 : Permutation Promenade
console.assert(
  promenade(day16TestPrograms, day16TestInput).programs === 'baedc',
  'promenade(day16TestPrograms, day16TestInput) NOK');
console.info('Day 16-1', promenade(day16Programs, day16Input).programs);
// This is reached in 60 operations 1000000000 % 60 = 40
console.assert(
  promenade(day16Programs, day16Input, 1000000000).modulo === 60,
  'promenade(day16Programs, day16Input, 1000000000).modulo NOK');
console.info('Day 16-2', promenade(day16Programs, day16Input, 40).programs);

// DAY 17 : Spinlock
console.assert(spinlock(3, 2017) === 638, 'spinlock(3, 2017) NOK');
console.info('Day 17-1', spinlock(363, 2017));
console.info('Day 17-2', neighbor0(363, 50000000));

// DAY 18: Duet
console.assert(duet(day18TestInput) === 4, 'duet(day18TestInput) NOK');
console.info('Day 18-1', duet(day18Input));
console.info('Day 18-2', duetWithDocumentation(day18Input));

// DAY 19: A Series of Tubes
console.assert(tube(day19TestInput).word === 'ABCDEF', 'tube(day19TestInput).word NOK');
console.info('Day 19-1', tube(day19Input).word);
console.assert(tube(day19TestInput).totalSteps === 38, 'tube(day19TestInput).step NOK');
console.info('Day 19-2', tube(day19Input).totalSteps);
