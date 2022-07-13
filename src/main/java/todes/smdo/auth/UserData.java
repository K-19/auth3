package todes.smdo.auth;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.RequiredArgsConstructor;

@Data
@RequiredArgsConstructor
@AllArgsConstructor
public class UserData {
    private String loginSED;
    private String password;
    private String accountSMDO;
    private String passwordAccountSMDO;
    private String testWord;
}
