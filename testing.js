/*
* Copyright © 2013-2021, TechFin UAB. All rights reserved.
* SDK.finance® is registered trademark owned by TechFin UAB.
* This file is part of the SDK.finance® product.
* Unauthorised copying of this file, via any medium, modification and/or any type of its distribution
* is strictly prohibited.
* Proprietary and confidential.
*/
 
package sdk.finance.core.contract.exception.profile;
 
import sdk.finance.core.base.exception.GenericDisplayableException;
import sdk.finance.core.coin.Coin;
import sdk.finance.core.coin.CoinType;
import sdk.finance.core.contract.commission.parts.TransactionType;
import sdk.finance.core.transaction.business.BusinessProcess;
 
/**
* Exception occurs when system can not find a proper commission profile for executing operation on coins.
*
* @author Pavlo Sidelov
*/
public class CommissionProfileNotFoundException
        extends GenericDisplayableException {
 
    private static final long serialVersionUID = 8868574432265287126L;
 
    public CommissionProfileNotFoundException(Coin srcCoin,
                                              Coin destCoin,
                                              TransactionType transactionType,
                                              BusinessProcess process) {
        this(srcCoin == null
             ? null
             : srcCoin.getType(),
             destCoin == null
             ? null
             : destCoin.getType(),
             transactionType,
             process.getType());
    }
 
    public CommissionProfileNotFoundException(CoinType srcType,
                                              CoinType destType,
                                              TransactionType transactionType,
                                              String processType) {
        super("exception.no_comm_profile_for_business_process",
              processType);
    }
 
    public CommissionProfileNotFoundException(String processType) {
        super("exception.no_comm_profile_for_business_process",
              processType);
    }
 
    public CommissionProfileNotFoundException() {
        super("exception.no_comm_profile");
    }
 
}
