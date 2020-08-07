import { useCounter } from '@/src/CompositonFunctions/utils/UseCounter'

describe('CompositionFunctions/utils/UseCounter', () => {
  type testType = {
    message: string,
    arg: {
      str?: string,
      maxLength?: number,
      magnification?: number
    },
    expected: number|boolean
  }

  describe('デフォルト値の時', () => {
    const testCases = [
      { message: '0のとき、falseが返ってくる', arg: { str: '' }, expected: false },
      { message: '0のとき、falseが返ってくる', arg: { str: undefined }, expected: false }
    ] as testType[]

    testCases.forEach((testCase) => {
      it(testCase.message, () => {
        const { counter } = useCounter(testCase.arg.str)
        expect(counter).toBe(testCase.expected)
      })
    })
  })

  describe('maxが50文字で倍率が0.8のとき', () => {
    const MAX = 50
    const testCases = [
      { message: '0のとき、falseが返ってくる', arg: { str: '' }, expected: false },
      { message: '0のとき、falseが返ってくる', arg: { str: undefined }, expected: false },
      { message: '1文字の時、falseである', arg: { str: 'a' }, expected: false },
      { message: '40文字の時、falseである', arg: { str: 'a'.repeat(40) }, expected: false },
      { message: '41文字の時、trueである', arg: { str: 'a'.repeat(41) }, expected: MAX },
      { message: '50文字の時、trueである', arg: { str: 'a'.repeat(MAX) }, expected: MAX }
    ] as testType[]

    testCases.forEach((testCase) => {
      it(testCase.message, () => {
        const { counter } = useCounter(testCase.arg.str, MAX, 0.8)
        expect(counter).toBe(testCase.expected)
      })
    })
  })

  describe('maxが100文字で倍率が0.5のとき', () => {
    const MAX = 100
    const testCases = [
      {
        message: '0のとき、falseが返ってくる',
        arg: { str: '' },
        expected: false
      },
      {
        message: '0のとき、falseが返ってくる',
        arg: { str: undefined },
        expected: false
      },
      {
        message: '1文字の時、falseである',
        arg: { str: 'a' },
        expected: false
      },
      {
        message: '50文字の時、falseである',
        arg: { str: 'a'.repeat(50) },
        expected: false
      },
      {
        message: '51文字の時、falseである',
        arg: { str: 'a'.repeat(51) },
        expected: MAX
      },
      {
        message: '100文字の時、falseである',
        arg: { str: 'a'.repeat(MAX) },
        expected: MAX
      }
    ] as testType[]

    testCases.forEach((testCase) => {
      it(testCase.message, () => {
        const { counter } = useCounter(testCase.arg.str, MAX, 0.5)
        expect(counter).toBe(testCase.expected)
      })
    })
  })
})