package todes.smdo.auth;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.RequestEntity;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.net.URI;
import java.net.URISyntaxException;
import java.util.*;

@RestController
@CrossOrigin
@RequestMapping("/api")
class MainController {
    List<UserData> users = new ArrayList<>();

    {
        users.add(new UserData("sergey", "k19", "acc", "passSmdo", "testAga"));
        users.add(new UserData("todes", "todes", null, null, null));
        users.add(new UserData("admin", "admin", null, null, null));
    }


    private final Logger log = LoggerFactory.getLogger(MainController.class);

    @PostMapping("/login")
    @ResponseBody
    public ResponseEntity<UserData> login(@Valid @RequestBody UserData userData)
            throws URISyntaxException {
        for (UserData user : users) {
            if (user.getLoginSED().equals(userData.getLoginSED()) && user.getPassword().equals(userData.getPassword()))
                return new ResponseEntity<>(user, HttpStatus.OK);
        }
        return new ResponseEntity<>(null, HttpStatus.NOT_FOUND);
    }

    @PostMapping("/reg")
    @ResponseBody
    public ResponseEntity<UserData> reg(@Valid @RequestBody UserData userData)
            throws URISyntaxException {
        if (userData == null ||
                userData.getLoginSED() == null || userData.getLoginSED().isEmpty() ||
                userData.getPassword() == null || userData.getPassword().isEmpty() ||
                userData.getAccountSMDO() == null || userData.getAccountSMDO().isEmpty() ||
                userData.getPasswordAccountSMDO() == null || userData.getPasswordAccountSMDO().isEmpty() ||
                userData.getTestWord() == null || userData.getTestWord().isEmpty())
            return new ResponseEntity<>(null, HttpStatus.BAD_REQUEST);
        for (UserData user : users) {
            if (user.getLoginSED().equals(userData.getLoginSED()) && user.getPassword().equals(userData.getPassword()))
                return new ResponseEntity<>(null, HttpStatus.NOT_FOUND);
        }
        ;
        users.add(userData);
        return new ResponseEntity<>(users.get(users.size() - 1), HttpStatus.OK);
    }

    @PostMapping("/word")
    @ResponseBody
    public ResponseEntity<UserData> testWord(@Valid @RequestBody UserData userData)
            throws URISyntaxException {
        for (UserData user : users) {
            if (user.getLoginSED().equals(userData.getLoginSED()) && user.getTestWord().equals(userData.getTestWord())) {
                return new ResponseEntity<>(user, HttpStatus.OK);
            }
        }
        return new ResponseEntity<>(null, HttpStatus.NOT_FOUND);
    }

    @PostMapping("/resetPass")
    @ResponseBody
    public ResponseEntity<UserData> resetPass(@Valid @RequestBody UserData userData)
            throws URISyntaxException {
        for (UserData user : users) {
            if (user.getLoginSED().equals(userData.getLoginSED())) {
                user.setPassword(userData.getPassword());
                return new ResponseEntity<>(user, HttpStatus.OK);
            }
        }
        return new ResponseEntity<>(null, HttpStatus.NOT_FOUND);
    }
}