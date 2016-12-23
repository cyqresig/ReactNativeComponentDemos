/**
 * Copyright (c) 2015-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 */

#import "AppDelegate.h"

#import "RCTBundleURLProvider.h"
#import "RCTRootView.h"

#import "RCTSplashScreen.h" //import interface
#import <AMapFoundationKit/AMapFoundationKit.h> //引入高德地图核心包

#import <AlipaySDK/AlipaySDK.h> //导入支付宝SDK库
#import "RCTAliPay.h" //import interface

@implementation AppDelegate

- (BOOL)application:(UIApplication *)application didFinishLaunchingWithOptions:(NSDictionary *)launchOptions
{
  [AMapServices sharedServices].apiKey = @"5cb14afaafbd3c3a6fb52ad3582169bb"; //设置高德地图SDK服务key
  
  NSURL *jsCodeLocation;

  jsCodeLocation = [[RCTBundleURLProvider sharedSettings] jsBundleURLForBundleRoot:@"index.ios" fallbackResource:nil];

  RCTRootView *rootView = [[RCTRootView alloc] initWithBundleURL:jsCodeLocation
                                                      moduleName:@"ReactNativeComponentDemos"
                                               initialProperties:nil
                                                   launchOptions:launchOptions];
  rootView.backgroundColor = [[UIColor alloc] initWithRed:1.0f green:1.0f blue:1.0f alpha:1];
  
  [RCTSplashScreen open:rootView]; //activate splashscreen

  self.window = [[UIWindow alloc] initWithFrame:[UIScreen mainScreen].bounds];
  UIViewController *rootViewController = [UIViewController new];
  rootViewController.view = rootView;
  self.window.rootViewController = rootViewController;
  [self.window makeKeyAndVisible];
  return YES;
}

//支付宝app 支付结果回调
- (BOOL)application:(UIApplication *)application
            openURL:(NSURL *)url
  sourceApplication:(NSString *)sourceApplication
         annotation:(id)annotation {
  
  if ([url.host isEqualToString:@"safepay"]) {
    //跳转支付宝钱包进行支付，处理支付结果
    [[AlipaySDK defaultService] processOrderWithPaymentResult:url standbyCallback:^(NSDictionary *resultDic) {
      //      NSLog(@"processOrderWithPaymentResult result = %@",resultDic);
      [[NSNotificationCenter defaultCenter] postNotificationName:@"RCTAliPay_Notification_processOrderWithPaymentResult" object:nil userInfo:resultDic];
    }];
  }
  return YES;
}

//支付宝app 支付结果回调 NOTE: 9.0以后使用新API接口
- (BOOL)application:(UIApplication *)app openURL:(NSURL *)url options:(NSDictionary<NSString*, id> *)options
{
  if ([url.host isEqualToString:@"safepay"]) {
    //跳转支付宝钱包进行支付，处理支付结果
    [[AlipaySDK defaultService] processOrderWithPaymentResult:url standbyCallback:^(NSDictionary *resultDic) {
      //      NSLog(@"processOrderWithPaymentResult result = %@",resultDic);
      [[NSNotificationCenter defaultCenter] postNotificationName:@"RCTAliPay_Notification_processOrderWithPaymentResult" object:nil userInfo:resultDic];
    }];
  }
  return YES;
}

@end
