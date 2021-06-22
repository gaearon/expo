import { Subscription } from '@unimodules/core';
/**
 * Returns whether the Screen Capture API is available on the current device.
 *
 * @returns A promise that resolves to a `boolean` indicating whether the Screen Capture API is available on the current
 * device. Currently, this resolves to `true` on Android and iOS only.
 */
export declare function isAvailableAsync(): Promise<boolean>;
/**
 * Prevents screenshots and screen recordings until `allowScreenCaptureAsync` is called or the app is restarted. If you are
 * already preventing screen capture, this method does nothing (unless you pass a new and unique `key`).
 *
 * > Please note that on iOS, this will only prevent screen recordings, and is only available on
 * iOS 11 and newer. On older iOS versions, this method does nothing.
 *
 * @param key Optional. If provided, this will help prevent multiple instances of the `preventScreenCaptureAsync`
 * and `allowScreenCaptureAsync` methods (and `usePreventScreenCapture` hook) from conflicting with each other.
 * When using multiple keys, you'll have to re-allow each one in order to re-enable screen capturing.
 * Defaults to `'default'`.
 */
export declare function preventScreenCaptureAsync(key?: string): Promise<void>;
/**
 * Re-allows the user to screen record or screenshot your app. If you haven't called
 * `preventScreenCapture()` yet, this method does nothing.
 *
 * @param key This will prevent multiple instances of the `preventScreenCaptureAsync` and
 * `allowScreenCaptureAsync` methods from conflicting with each other. If provided, the value must
 * be the same as the key passed to `preventScreenCaptureAsync` in order to re-enable screen
 * capturing. Defaults to 'default'.
 */
export declare function allowScreenCaptureAsync(key?: string): Promise<void>;
/**
 * A React hook to prevent screen capturing for as long as the owner component is mounted.
 *
 * @param key. If provided, this will prevent multiple instances of this hook or the
 * `preventScreenCaptureAsync` and `allowScreenCaptureAsync` methods from conflicting with each other.
 * This argument is useful if you have multiple active components using the `allowScreenCaptureAsync`
 * hook. Defaults to `'default'`.
 */
export declare function usePreventScreenCapture(key?: string): void;
/**
 * Adds a listener that will fire whenever the user takes a screenshot while the app is foregrounded.
 * On Android, this method requires the `READ_EXTERNAL_STORAGE` permission. You can request this
 * with [`MediaLibrary.requestPermissionsAsync()`](../media-library/#medialibraryrequestpermissionsasync).
 *
 * @param listener The function that will be executed when the user takes a screenshot.
 * This function accepts no arguments.
 *
 * @return A `Subscription` object that you can use to unregister the listener, either by calling
 * `remove()` or passing it to `removeScreenshotListener`.
 */
export declare function addScreenshotListener(listener: () => void): Subscription;
/**
 * Removes the subscription you provide, so that you are no longer listening for screenshots.
 *
 * If you prefer, you can also call `remove()` on that `Subscription` object, for example:
 *
 * ```ts
 * let mySubscription = addScreenshotListener(() => {
 *   console.log("You took a screenshot!");
 * });
 * ...
 * mySubscription.remove();
 * // OR
 * removeScreenshotListener(mySubscription);
 * ```
 *
 * @param subscription Subscription returned by `addScreenshotListener`.
 */
export declare function removeScreenshotListener(subscription: Subscription): void;
export { Subscription };
