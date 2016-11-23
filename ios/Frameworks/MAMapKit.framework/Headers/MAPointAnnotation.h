//
//  MAPointAnnotation.h
//  MAMapKit
//
//  Created by AutoNavi.
//  Copyright (c) 2013年 AutoNavi. All rights reserved.
//

#import "MAShape.h"

/*!
 @brief 点标注数据
 */
@interface MAPointAnnotation : MAShape

/*!
 @brief 经纬度
 */
@property (nonatomic, assign) CLLocationCoordinate2D coordinate;

/**
 是否固定在屏幕一点, 注意，拖动或者手动改变经纬度，都会导致设置失效
 */
@property (nonatomic, assign, getter = isLockedToScreen) BOOL lockedToScreen;

/**
 固定屏幕点的坐标
 */
@property (nonatomic, assign) CGPoint lockedScreenPoint;

@end
