
export class MerchantHelper {
  public static addMerchantMetadataToModels = (model) => {
    return {
      ...model,
      merchantid: '3090000002',
      userid: '3090000002',
      userip: '1',
      useragent: 'web',
    };
  };
}
