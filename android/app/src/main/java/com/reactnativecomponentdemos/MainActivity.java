package com.reactnativecomponentdemos;

import android.os.Bundle;

import com.facebook.react.ReactActivity;
import com.facebook.react.ReactNativeHost;
import com.facebook.react.ReactPackage;
import com.facebook.react.shell.MainReactPackage;
import com.reactnativecomponent.amap.RCTAMapPackage;
import com.reactnativecomponent.barcode.RCTCapturePackage;
import com.reactnativecomponent.imageloader.RCTLoaderImageViewPackage;
import com.reactnativecomponent.splashscreen.RCTSplashScreen;
import com.reactnativecomponent.splashscreen.RCTSplashScreenPackage;
import com.reactnativecomponent.swiperefreshlayout.RCTSwipeRefreshLayoutPackage;
import com.reactnativecomponent.amaplocation.RCTAMapLocationPackage;    //import package

import java.util.Arrays;
import java.util.List;

public class MainActivity extends ReactActivity {

    /**
     * Returns the name of the main component registered from JavaScript.
     * This is used to schedule rendering of the component.
     */
    @Override
    protected String getMainComponentName() {
        return "ReactNativeComponentDemos";
    }

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        RCTSplashScreen.openSplashScreen(this);

        MainApplication application = (MainApplication) this.getApplication();
        application.setReactNativeHost(new ReactNativeHost(application) {
            @Override
            protected boolean getUseDeveloperSupport() {
                return BuildConfig.DEBUG;
            }

            @Override
            protected List<ReactPackage> getPackages() {
                return Arrays.<ReactPackage>asList(
                        new MainReactPackage(),
                        new RCTSplashScreenPackage(), //register Module
                        new RCTSwipeRefreshLayoutPackage(),  //register Module
                        new RCTCapturePackage(MainActivity.this),   //register Module
                        new RCTLoaderImageViewPackage(), //register Module
                        new RCTAMapLocationPackage(),  //register Module
                        new RCTAMapPackage()  //register Module
                );
            }

        });

        super.onCreate(savedInstanceState);
    }
}
