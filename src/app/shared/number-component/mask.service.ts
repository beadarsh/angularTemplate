import createNumberMask from "text-mask-addons/dist/createNumberMask";

export class MaskService {
  percentMask = createNumberMask({
    prefix: '',
    suffix: '%',
    thousandsSeparatorSymbol: '',
    allowDecimal: true,
    decimalLimit: 2,
    allowNegative: true,
    integerLimit: 3
  });

  currencyMask = createNumberMask({
    prefix: '',
    suffix: '',
    thousandsSeparatorSymbol: ',',
    allowDecimal: false,
    allowNegative: false
  });

  numberMask = createNumberMask({
    prefix: '',
    suffix: '',
    thousandsSeparatorSymbol: ',',
    allowDecimal: false,
    allowNegative: false
  });

  public static getPercentMask(decimalLimit: number = 2, allowNegative: boolean = true) {
    return createNumberMask({
      prefix: '',
      suffix: '%',
      thousandsSeparatorSymbol: '',
      allowDecimal: true,
      decimalLimit: decimalLimit,
      allowNegative: allowNegative,
      integerLimit: 3 //this needs fixing if it is to be used -ve values are only 2 places as -ve sign uses one place
    });
  }

  getPositiveOnlyPercentMask(decimalLimit: number = 2, allowNegative: boolean = true) {
    return createNumberMask({
      prefix: '',
      suffix: '%',
      thousandsSeparatorSymbol: '',
      allowDecimal: true,
      decimalLimit: decimalLimit,
      integerLimit: 3
    });
  }

  public static getMaskNumberWithDecimalPlaces(decimalLimit: number = 2) {
    return createNumberMask({
      prefix: '',
      suffix: '',
      thousandsSeparatorSymbol: ',',
      allowDecimal: true,
      decimalLimit: decimalLimit,
      allowNegative: false
    });
  }


}

enum MaskType {

}
